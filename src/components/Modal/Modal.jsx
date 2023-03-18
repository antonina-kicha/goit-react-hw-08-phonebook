import { Formik} from 'formik';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { createPortal } from 'react-dom';

import { update } from 'redux/contacts/operations';
import { useAuth } from 'hooks/useAuth';
import { ModalContainer, Overlay, FormWithStyle, Input, Button, Error } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ id, closeModal }) => {
    const { contacts } = useAuth();
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    
    const handleSubmit = (evt) => {
  
    const name = evt.name;
    const number = evt.number;
    const contactsWithoutEdit = contacts.filter(contact => contact.id !== id)
        if (contactsWithoutEdit.find(contact => contact.name === name)) {
            setError('You have a contact with that name...');
        return;
    }
        if (contactsWithoutEdit.find(contact => contact.number === number)) {
            setError('You have a contact with that phone...');
        return;
    }

    dispatch(
        update(({ id, name, number }))
        );
        closeModal();
    }

    const getInitialValues = (idContact) => {
        const contactUpdate = contacts.find(contact => contact.id === idContact);
        return ({ name: contactUpdate.name, number: contactUpdate.number });
    }

    return createPortal (
        <Overlay>
            <ModalContainer>
                <Formik
                    initialValues={getInitialValues(id)}
                    onSubmit={handleSubmit}>
                    <FormWithStyle autoComplete="off">
                        <label htmlFor="name"> Name</label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            pattern="^[a-zA-Zа-яА-Я0-9]+(([' -][a-zA-Zа-яА-Я0-9])?[a-zA-Zа-яА-Я0-9]*)*$" />
                        
                        <label htmlFor="number">Contact </label>
                        <Input
                            id="number"
                            name="number"
                            type="tel"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" />
                        <div>
                            <Button type="button" onClick={() => closeModal()} >Cancel</Button>
                            <Button type="submit" >Update contact</Button>
                        </div>
                    </FormWithStyle>
                </Formik>
                {error && <Error>{error}</Error>}
            </ModalContainer>
        </Overlay>,
        modalRoot,
    )
}