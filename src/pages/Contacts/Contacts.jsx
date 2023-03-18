import { ContactForm } from 'components/ContactForm/ContactForm.jsx'
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { FilterContainer, ContactsContainer, ContactsListWrapper, AddContactWrapper, MainHeader, Container, Image } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
      <Container>
        <FilterContainer>
          <MainHeader>Phonebook</MainHeader>
          <Filter />
        </FilterContainer>
        
        <ContactsContainer>
          <ContactsListWrapper>
            <h2>Contacts</h2>
            {items.length > 0 ? <ContactList /> : <p>Your contact list will be here</p>}
          </ContactsListWrapper>
          <AddContactWrapper>
             <h2>Create new contact</h2>
            <ContactForm />
            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/1896_telephone.jpg/222px-1896_telephone.jpg' alt='number'></Image>
          </AddContactWrapper>
         
        </ContactsContainer>
        </Container>
    );
}