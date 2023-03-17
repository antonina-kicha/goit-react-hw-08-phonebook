import { useAuth } from 'hooks/useAuth';
import { AvatarGenerator } from 'random-avatar-generator';
import { UserInfo, ContainerForAccount, TextLabel } from './MyAccount.styled';

const generator = new AvatarGenerator();

export const MyAccount = () => {
    const avatar = generator.generateRandomAvatar();
    const { user, contacts } = useAuth();
    console.log(contacts);

    return (
        <ContainerForAccount>
            <img src={avatar} alt='avatar'     width={264} height={280}/>
            <UserInfo>
                <p><TextLabel>Name: </TextLabel>{user.name}</p>
                <p><TextLabel>email: </TextLabel>{user.email}</p>
                <p><TextLabel>Number of contacts in the phonebook: </TextLabel>{contacts.length}</p>
            </UserInfo>
            
        </ContainerForAccount>
    )
}