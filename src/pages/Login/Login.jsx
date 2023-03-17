import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { ContainerLogin } from './Login.styled';

export default function Login() {
  return (
    <ContainerLogin>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <LoginForm />
    </ContainerLogin>
  );
}