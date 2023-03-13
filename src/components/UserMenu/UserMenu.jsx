import { useAuth } from 'hooks/useAuth';
import { WelcomeText, WelcomeContainer, Button } from './UserMenu.styled';
import { AvatarGenerator } from 'random-avatar-generator';
 
const generator = new AvatarGenerator();
 
// Simply get a random avatar
 

export const UserMenu = () => {
    const { user } = useAuth();
    const avatar = generator.generateRandomAvatar();
    

    return (
        <WelcomeContainer>
            <WelcomeText>Welcome, {user.name}</WelcomeText>
            <img src={avatar} alt='avatar'></img>
            <Button type="button">
                Logout
            </Button>
        </WelcomeContainer>

    );
}