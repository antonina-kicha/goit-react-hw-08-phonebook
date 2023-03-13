import { List, ListItem, Button } from './ContactList.styled'
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { RxAvatar } from 'react-icons/rx';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';




export const ContactList = () => {

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const dispatch = useDispatch();
    
    const handleDelete = (id) => dispatch(deleteContact(id));

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

    return (
        <>
            <List>
                {listItems.length > 0 && (listItems.map((listItem) => (
              
                    <ListItem key={listItem.id}>
                        <div>
                            <RxAvatar />
                            <span>{listItem.name}: {listItem.phone}</span>
                        </div>
                        
                        <div>
                            <Button type='button' onClick={() => handleDelete(listItem.id)}><AiOutlineDelete /></Button>
                            <Button type='button' ><AiOutlineEdit /></Button>
                        </div>
                        
                    </ListItem>
            )))}
                </List>
        </>
    )
}


