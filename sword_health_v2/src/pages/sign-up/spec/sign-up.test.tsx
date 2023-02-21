import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { SignUp } from '../sign-up';

describe('SignUp', () => {
  it('renders the form', () => {
    render(<SignUp />);
    expect(screen.getByLabelText('Username:')).toBeInTheDocument();
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    expect(screen.getByLabelText('Role:')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  it('updates the form values', () => {
    render(<SignUp />);
    const usernameInput = screen.getByLabelText('Username:') as HTMLInputElement;
    const passwordInput = screen.getByLabelText('Password:') as HTMLInputElement;
    const roleSelect = screen.getByLabelText('Role:') as HTMLSelectElement;

    fireEvent.change(usernameInput, { target: { value: 'test-user' } });
    fireEvent.change(passwordInput, { target: { value: 'test-password' } });
    fireEvent.change(roleSelect, { target: { value: 'User' } });

    expect(usernameInput.value).toBe('test-user');
    expect(passwordInput.value).toBe('test-password');
    expect(roleSelect.value).toBe('User');
  });
});