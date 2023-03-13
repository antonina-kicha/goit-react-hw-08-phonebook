import { Navigation } from '../Navigation/Navigation';
import { Header } from './AppBar.styled';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <Header>
            <Navigation />
            {isLoggedIn? <UserMenu /> : <AuthNav/>}
            
            </Header>
    )
}