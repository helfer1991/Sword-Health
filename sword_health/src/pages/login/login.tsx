import React, { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

import { Container, Wrapper, FieldsDescription, InputFields, Link, ButtonWrapper, Button } from './styles';

type LoginProps = {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
    const [credentials, setCredentials] = useState({ username: '', password: ''});
    const { loginUser, isUserAuthenticated } = useLogin();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setCredentials({
          ...credentials,
          [event.target.name]: event.target.value,
        });
      };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      loginUser(credentials);
      isUserAuthenticated();
      setIsAuthenticated(true);
      setCredentials({
        username: '',
        password: '',
      })
    };
  
    return (
      <Container>
        <form onSubmit={handleSubmit}>
          <Wrapper>
            <label htmlFor="username">
              <FieldsDescription>Username:</FieldsDescription>
              <InputFields
                name="username"
                type="text"
                value={credentials.username}
                onChange={handleChange}
              />
            </label>
          </Wrapper>

          <Wrapper>
            <label htmlFor="password">
              <FieldsDescription>Password:</FieldsDescription>
              <InputFields
                name="password"
                type="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </label>
          </Wrapper>

          <ButtonWrapper>
            <Button type="submit">Login</Button>
            <Button variant="signup">
              <Link to="/sign-up">
                Register
              </Link>
            </Button>
          </ButtonWrapper>
        </form>
      </Container>
    );
}