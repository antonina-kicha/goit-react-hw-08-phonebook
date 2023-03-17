import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form } from './RegisterForm.styled';
import { FormField, FormLabel, FieldName, UserIcon, EmailIcon, PassIcon, Button } from './RegisterForm.styled';
import { useAuth } from 'hooks/useAuth';



export const RegisterForm = () => {
  const { error } = useAuth();
  console.log(error);

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
    
    // form.reset();
  }
  
  return (
      <div>
    <Form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel> 
          <UserIcon size={20}/>
          <FormField type="text" name="name"  placeholder=" " required/>
                  <FieldName>Username</FieldName>

      </FormLabel>
        <FormLabel>
          <EmailIcon size={22} />
          <FieldName>Email</FieldName>
        <FormField type="email" name="email" placeholder=" " required/>
      </FormLabel>
        <FormLabel >
          <PassIcon size={22} />
            <FieldName>Password (8 characters minimum)</FieldName>
          <FormField type="password" name="password" pattern = "[0-9a-zA-Z]{8,}" placeholder=" " required/>
        </FormLabel>
              {error && <p>User with this username or email already exists </p>}

      
        <Button type="submit">Register</Button>
      </Form>
      </div>

    );
}

