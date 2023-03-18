import { useDispatch } from 'react-redux';
import { logOut } from "redux/auth/operations";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

import { WelcomeText, WelcomeContainer, Button, UserNav, Link } from './UserMenu.styled';
import { MdLogout } from 'react-icons/md';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
    const { user } = useAuth();   
    const dispatch = useDispatch();
    
    return (
        <WelcomeContainer>
            <WelcomeText>Welcome, {user.name}</WelcomeText>
            <UserNav>

            <nav>
                <Link to="/account">My account</Link>
            </nav>

            <Tooltip id="tooltip" />
            <Button type="button" data-tooltip-id="tooltip" data-tooltip-content="Log Out"  onClick={() => dispatch(logOut())}>
                <MdLogout size={24}/>
            </Button>
            </UserNav>
        </WelcomeContainer>
    );
}