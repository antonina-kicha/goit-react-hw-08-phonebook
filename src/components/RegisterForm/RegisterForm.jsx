import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form } from './RegisterForm.styled';
import { FormField, FormLabel, FieldName } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      });
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    
    form.reset();
  }
  
    return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel> 
        <FieldName>Username</FieldName>
        <FormField type="text" name="name" placeholder="Username"/>
      </FormLabel>
      <FormLabel>
          <FieldName>Email</FieldName>
        <FormField type="email" name="email" placeholder="Email"/>
      </FormLabel>
        <FormLabel >
            <FieldName>Password</FieldName>
        <FormField type="password" name="password" placeholder="Password"/>
      </FormLabel>
      <button type="submit">Register</button>
    </Form>
    );
}