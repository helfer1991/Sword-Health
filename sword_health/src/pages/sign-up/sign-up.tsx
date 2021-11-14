import React, { useState } from 'react';

import { Container, Wrapper, FieldsDescription, InputFields, SelectField, Button } from './styles';

export const SignUp: React.FC = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '', role: '' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setCredentials({
          ...credentials,
          [event.target.name]: event.target.value,
        });
      };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      localStorage.setItem(`userData-${credentials.username}`, JSON.stringify(credentials));
      setCredentials({
        username: '',
        password: '',
        role: '',
      })
    };

    
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Wrapper>
          <label htmlFor="username">
            <FieldsDescription>Username:</FieldsDescription>
            <InputFields
              type="text"
              name="username"
              id="username"
              value={credentials.username}
              onChange={handleChange}
            />
          </label>
        </Wrapper>
        <Wrapper>
          <label htmlFor="password">
            <FieldsDescription>Password:</FieldsDescription>
            <InputFields
              type="password"
              name="password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </label>
        </Wrapper>
        <Wrapper>
          <label htmlFor="role">
            <FieldsDescription>Role:</FieldsDescription>
            <SelectField id="role" name="role" value={credentials.role} onChange={handleChange}>
              <option value="">Select a role</option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </SelectField>
          </label>
        </Wrapper>
        <Button type="submit">Register</Button>
      </form>
    </Container>
  );
}