import { Link, Nav, LogoIcon } from './Navigation.styled';

export const Navigation = () => {
    return (
        <Nav>
            <Link to="/"><LogoIcon/>Home</Link>
            <Link to="/contacts">Contacts</Link>
        </Nav>
    );
}
