import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Form, FormField, FormLabel, FieldName, UserIcon, EmailIcon, PassIcon, Button} from './LoginForm.styled'


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    console.log('hello');
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };


    return (
    <Form onSubmit={handleSubmit} autoComplete="off">
        
        <FormLabel>
          <EmailIcon size={22} />
          <FieldName>Email</FieldName>
        <FormField type="email" name="email" placeholder=" " required/>
      </FormLabel>
        <FormLabel >
          <PassIcon size={22} />
            <FieldName>Password</FieldName>
          <FormField type="password" name="password" placeholder=" " required/>
      </FormLabel>
      
      <Button type="submit">Log in</Button>
    </Form>
    );
}