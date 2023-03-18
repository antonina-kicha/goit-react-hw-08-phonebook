import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from 'redux/contacts/operations';

import { useAuth } from 'hooks/useAuth';

import { FormWrapper, Button, Error, Label, InputWrapper, Input, FormWithStyle } from './ContactForm.styled';

export const ContactForm = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');

    const { contacts } = useAuth();
    const dispatch = useDispatch();

    const handleInputChange = evt => {
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
                initialValues={{ name: '', number: '' }}
                onSubmit={handleSubmit}
            >
                <FormWithStyle autoComplete="off">
                    <InputWrapper>
                        <Label htmlFor="name"> Name </Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            pattern="^[a-zA-Zа-яА-Я0-9]+(([' -][a-zA-Zа-яА-Я0-9])?[a-zA-Zа-яА-Я0-9]*)*$"
                            value={name} onChange={handleInputChange} />
                    </InputWrapper>
                    
                    <InputWrapper>
                        <Label htmlFor="number">Contact </Label>
                        <Input
                            id="number"
                            name="number"
                            type="tel"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            value={number} onChange={handleInputChange} />
                    </InputWrapper>
                    <Button type="submit" >Add contact</Button>
                </FormWithStyle>
            </Formik>
            {error && <Error>{error}</Error>}
        </FormWrapper> 
    )
}

