import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm.jsx';
import { ContainerRegister } from './Register.styled';

export default function Register() {
  return (
    <ContainerRegister>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </ContainerRegister>
  );
}