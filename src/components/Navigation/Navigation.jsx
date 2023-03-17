import { Link, Nav, LogoIcon } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth.jsx';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Nav>
            <Link to="/"><LogoIcon />Home</Link>
            {isLoggedIn && <Link to="/contacts">Contacts</Link>}
            
        </Nav>
    );
}
