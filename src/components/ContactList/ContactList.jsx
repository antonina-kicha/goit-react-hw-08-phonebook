import { List, ListItem, Button, ContactInfo } from './ContactList.styled'
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { RxAvatar } from 'react-icons/rx';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';



export const ContactList = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [idUpdateContact, setIdUpdateContact] = useState();

    
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const dispatch = useDispatch();
    
    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteContact(id));
    };

    const getVisibleContasts = () => {
        const normalisedFilter = filter.toLowerCase();
        console.log(contacts);
        if(contacts !== []){
            const visebleContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalisedFilter));
            return visebleContacts;
        };
    }

    const listItems = getVisibleContasts();

    //  For modal
    const openModal = (id) => {
        setModalIsOpen(true);
        setIdUpdateContact(id)
    }

    const closeModal = () => {
        setModalIsOpen(false);
        setIdUpdateContact("");
    }

    return (
        <div>               
            <List>
                {listItems.length > 0 && (listItems.map((listItem) => (
              
                    <ListItem key={listItem.id}>
                        <ContactInfo>
                            <RxAvatar size={24}/>
                            <span>{listItem.name}: {listItem.number}</span>
                        </ContactInfo>
                        
                        <div>
                            <Button type='button' onClick={() => handleDelete(listItem.id)}><AiOutlineDelete size={18}/></Button>
                            <Button type='button' onClick={() => openModal(listItem.id)}><AiOutlineEdit size={18}/></Button>
                        </div>
                        
                    </ListItem>
            )))}
                </List>
            {modalIsOpen && (<Modal id={idUpdateContact} closeModal={closeModal}></Modal>)}
        </div>
    )
}


