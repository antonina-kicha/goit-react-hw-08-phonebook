import { useAuth } from 'hooks/useAuth';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from "react-redux";
import { update } from 'redux/contacts/operations';
import { ModalContainer, Overlay, FormWithStyle, Input, Button } from './Modal.styled';


export const Modal = ({ id, closeModal }) => {
    const { contacts } = useAuth();
    const dispatch = useDispatch();

    
const handleSubmit = (evt) => {
  
    const name = evt.name;
    const number = evt.number;

    dispatch(
        update(({id, name, number}))
    );
    closeModal();
}
    const getInitialValues = (idContact) => {
        console.log(contacts);
        console.log(idContact);
        const contactUpdate = contacts.find(contact => contact.id === idContact);
        console.log(contactUpdate);
        console.log({ name: contactUpdate.name, number: contactUpdate.number });
        return ({ name: contactUpdate.name, number: contactUpdate.number });
    }

    return (
        <Overlay>
        <ModalContainer>
        <Formik
        initialValues={getInitialValues(id)}
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
                     />

            <label htmlFor="number">
                Contact
            </label>
                <Input
                    id="number"
                    name="number"
                    type="tel"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        />
                     <div>
                            <Button type="button" onClick={() => closeModal()} >Cancel</Button>
                            <Button type="submit" >Update contact</Button>
                </div>

      </FormWithStyle>
            </Formik>
            </ModalContainer>
            </Overlay>
    )
}