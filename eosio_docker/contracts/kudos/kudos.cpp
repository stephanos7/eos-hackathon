#include <eosiolib/eosio.hpp>

class attestationsBook : public eosio::contract {
   public:
      attestationsBook( account_name s ):
         contract( s ),   // initialization of the base class for the contract
         _records( s, s ) // initialize the table with code and scope NB! Look up definition of code and scope   
      {
      }

      /// @abi action
      void create( account_name owner, account_name attester, const std::string& attestation, const std::bool& verdict ) {

         require_auth( owner );
         require_auth( attester );

         // _records.end() is in a way similar to null and it means that the value isn't found
         // uniqueness of primary key is enforced at the library level but we can enforce it in the contract with a
         // better error message
         eosio_assert( _records.find( owner ) == _records.end(), "This record already exists in the addressbook" );

            bool validAttestator = std::find(std::begin(array), std::end(array), attester);
            // When the element is not found, std::find returns the end of the range
            if (validAttestator != std::end(array)) {
            return true
            } else {
            return false
}


         eosio_assert( validAttestator );

         // we use phone as a secondary key                                                                                 
         // secondary key is not necessarily unique, we will enforce its uniqueness in this contract
         auto idx = _records.get_index<N(byphone)>();
         eosio_assert( idx.find( phone ) == idx.end(), "Phone number is already taken" );

         _records.emplace( owner, [&]( auto& rcrd ) {
            rcrd.owner    = owner;
            rcrd.phone    = phone;
            rcrd.fullname = fullname;
            rcrd.address  = address;
         });
      }

      /// @abi action
      void remove( account_name owner ) {

         require_auth( owner );

         auto itr = _records.find( owner );
         eosio_assert( itr != _records.end(), "Record does not exit" );
         _records.erase( itr );
      }

      /// @abi action                                               
      void update( account_name owner, const std::string& address ) {

         require_auth( owner );

         auto itr = _records.find( owner );
         eosio_assert( itr != _records.end(), "Record does not exit" );
         eosio_assert( address.size() <= 50, "Address is too long" );
         _records.modify( itr, owner, [&]( auto& rcrd ) {
            rcrd.address = address;
         });
      }

   private:
      // Setup the struct that represents a row in the table                                                            
      /// @abi table records                   
      struct record {
         account_name owner; // primary key     
         account_name attester; // participant ??
         attestation  string;    
         verdict      bool;                                   

         uint64_t primary_key() const { return owner; }
         uint64_t by_phone() const    { return phone; }
      };

      typedef eosio::multi_index< N(records), record,
         eosio::indexed_by<N(byphone), eosio::const_mem_fun<record, uint64_t, &record::by_phone> >
      > record_table;

      // Creating the instance of the `record_table` type                      
      record_table _records;
};

EOSIO_ABI( addressbook, (create)(remove)(update) )