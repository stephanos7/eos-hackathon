#include <eosiolib/eosio.hpp>

class attestations : public eosio::contract {
   public:
      attestations( account_name s ):
         contract( s ),   // initialization of the base class for the contract
         _records( s, s ) // initialize the table with code and scope NB! Look up definition of code and scope   
      {
      }

      /// @abi action
      void create( account_name owner, uint64_t uid, const std::string& attestation, bool verdict ) {

         require_auth( owner );

         // _records.end() is in a way similar to null and it means that the value isn't found
         // uniqueness of primary key is enforced at the library level but we can enforce it in the contract with a
         // better error message
         auto idx = _records.get_index<N(byUid)>();
         eosio_assert( idx.find( uid ) == idx.end(), "attestation exists..." );

         _records.emplace(owner, [&]( auto& rcrd ) {
            rcrd.owner = owner;
            rcrd.attestation = attestation;
            rcrd.verdict = verdict;
            rcrd.uid = uid;
         });
      }

      /// @abi action
      // void remove( account_name owner ) {

      //    require_auth( owner );

      //    auto itr = _records.find( owner );
      //    eosio_assert( itr != _records.end(), "Record does not exit" );
      //    _records.erase( itr );
      // }

      /// @abi action                                               
      // void update( account_name owner, const std::string& address ) {

      //    require_auth( owner );

      //    auto itr = _records.find( owner );
      //    eosio_assert( itr != _records.end(), "Record does not exit" );
      //    eosio_assert( address.size() <= 50, "Address is too long" );
      //    _records.modify( itr, owner, [&]( auto& rcrd ) {
      //       rcrd.address = address;
      //    });
      // }

   private:
      // Setup the struct that represents a row in the table                                                            
      /// @abi table records                   
      struct record {
         account_name owner;
         uint64_t uid;     
         std::string attestation;
         bool verdict;                                   

         uint64_t primary_key() const { return uid; }
         uint64_t by_uid() const { return uid;}
      };

      typedef eosio::multi_index< N(records), record,
         eosio::indexed_by<N(byUid), eosio::const_mem_fun<record, uint64_t, &record::by_uid> >
      > record_table;

      // Creating the instance of the `record_table` type                      
      record_table _records;
};

EOSIO_ABI( attestations, (create) )