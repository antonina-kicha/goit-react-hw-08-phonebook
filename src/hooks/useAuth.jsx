import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors';
import { selectContacts } from '../redux/contacts/selectors';


export const useAuth = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const contacts = useSelector(selectContacts);

    

    return {
        user,
        isLoggedIn,
        isRefreshing,
        contacts,
    };
};