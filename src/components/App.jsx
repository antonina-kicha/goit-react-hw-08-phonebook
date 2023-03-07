import { ContactForm } from './ContactForm/ContactForm'
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import {fetchContacts} from 'redux/operations'


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  
  return (
      <Container>
        <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
            {isLoading && !error && <b>Request in progress...</b>}
        <Filter />
        <ContactList />
      </Container>
    )
}