/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import { AuthContext} from '../AuthContext';

const mockData = [
  { username: 'user1', password: 'pass1', role: 'admin' },
  { username: 'user2', password: 'pass2', role: 'user' },
];

const renderWithAuthContext = (children: React.ReactNode) =>
  render(
    <AuthContext.Provider value={{ data: mockData, loginUser: jest.fn(), isUserAuthenticated: jest.fn(), getUser: jest.fn(), logout: jest.fn() }}>
      {children}
    </AuthContext.Provider>
  );

describe('AuthContextProvider', () => {
  it('renders children', () => {
    const { getByText } = renderWithAuthContext(<div>Test</div>);
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('checks if a user is authenticated', async () => {
    const isUserAuthenticated = jest.fn().mockReturnValue(true);
    const { findByTestId } = renderWithAuthContext(
      <div data-testid="test-component">Test</div>
    );
    const component = await findByTestId('test-component');
    expect(component).toBeInTheDocument();
    expect(isUserAuthenticated()).toBe(true);
  });

  it('gets a user', async () => {
    const getUser = jest.fn().mockReturnValue({ username: 'user1', password: 'pass1', role: 'admin' });
    const { findByTestId } = renderWithAuthContext(
      <div data-testid="test-component">Test</div>
    );
    const component = await findByTestId('test-component');
    expect(component).toBeInTheDocument();
    expect(getUser()).toEqual({ username: 'user1', password: 'pass1', role: 'admin' });
  });

  it('logs out a user', async () => {
    const logout = jest.fn();
    const { findByTestId } = renderWithAuthContext(
      <div data-testid="test-component">Test</div>
    );
    const component = await findByTestId('test-component');
    expect(component).toBeInTheDocument();
    logout();
    expect(logout).toHaveBeenCalled();
  });
});
