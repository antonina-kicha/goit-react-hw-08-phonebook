import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';
import { FormWrapper, Button, Error } from './ContactForm.styled'

import { useState } from 'react';

import { useDispatch } from "react-redux";
import { addContact } from 'redux/contacts/operations'
import { useAuth } from 'hooks/useAuth';


const Input = styled(Field)`
    width: 350px;
    height: 20px;
    `;
const FormWithStyle = styled(Form)`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    `;

export const ContactForm = () => {
     const { contacts } = useAuth();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');


    const dispatch = useDispatch();

    const handleInputChange = evt => {
        console.log(evt.currentTarget.name);
      
        switch (evt.currentTarget.name) {
            case "name":
                setName(evt.currentTarget.value);
                break;
            case "number":
                setNumber(evt.currentTarget.value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = evt => {
        // evt.preventDefault();
          if (!name || !number) {
            setError('Please fill out all contact information...');
            return;
          }
            if (contacts.find(contact => contact.name === name))  {
            setError('You have a contact with that name...');
            return;
            }
        if (contacts.find(contact => contact.number === number))  {
            setError('You have a contact with that phone...');
            return;
        }
        dispatch(addContact(({name, number})));
        console.log(name, number);
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setNumber('');
        setError('');
    }

    return (
      <FormWrapper>
        <Formik
        initialValues={{name: '', number: ''}}
      onSubmit={handleSubmit}
    >
      <FormWithStyle autoComplete = "off">
            <label htmlFor="name">
                Name
            </label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    pattern="^[a-zA-Zа-яА-Я0-9]+(([' -][a-zA-Zа-яА-Я0-9])?[a-zA-Zа-яА-Я0-9]*)*$"
                    value={name} onChange={handleInputChange} />

            <label htmlFor="number">
                Contact
            </label>
                <Input
                    id="number"
                    name="number"
                    type="tel"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    value={number} onChange={handleInputChange} />

        <Button type="submit" >Add contact</Button>
      </FormWithStyle>
            </Formik>
            {error && <Error>{error}</Error>}
        </FormWrapper>
        
    )
}

