import { ContactForm } from 'components/ContactForm/ContactForm.jsx'
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { FilterContainer, ContactsContainer, ContactsListWrapper, AddContactWrapper, MainHeader, Container } from './Contacts.styled';

export default function Contacts() {
const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
            {isLoading && !error && <b>Request in progress...</b>}
            <ContactList />
          </ContactsListWrapper>
          <AddContactWrapper>
             <h2>Create new contact</h2>
            <ContactForm />
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/1896_telephone.jpg/222px-1896_telephone.jpg' alt='phone'></img>
          </AddContactWrapper>
         
        </ContactsContainer>
        </Container>
    );
}