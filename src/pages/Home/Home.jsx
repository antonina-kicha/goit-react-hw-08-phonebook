import { Container, Logo, ListItem, List, ListHeader, Text } from './Home.styled';
import { CgSandClock } from 'react-icons/cg';
import { AiOutlineSchedule } from 'react-icons/ai';
import { MdSecurity } from 'react-icons/md';


export default function Home() {
    return (
        <Container>
            <h1>Create your contact list with <Logo>phonebook</Logo> !</h1>
            <List>
                <ListItem>
                    <ListHeader><CgSandClock />quickly</ListHeader>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis ea eligendi iusto facilis! Delectus non reprehenderit voluptate sed libero odit, ea distinctio dignissimos, molestiae accusantium, quae amet repudiandae error.</Text>
                </ListItem>
                <ListItem>
                    <ListHeader><AiOutlineSchedule />easy</ListHeader>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis ea eligendi iusto facilis! Delectus non reprehenderit voluptate sed libero odit, ea distinctio dignissimos, molestiae accusantium, quae amet repudiandae error.</Text>

                    </ListItem>
                <ListItem>
                    <ListHeader><MdSecurity />securely</ListHeader>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis ea eligendi iusto facilis! Delectus non reprehenderit voluptate sed libero odit, ea distinctio dignissimos, molestiae accusantium, quae amet repudiandae error.</Text>

                    </ListItem>
            </List>
        </Container>
    )
}