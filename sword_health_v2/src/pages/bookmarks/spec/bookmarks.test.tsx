import { render, screen } from '@testing-library/react';
import { AuthContextProvider, AuthContext} from '../../../context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import type { User } from '../../../context/AuthContext';
import { Bookmarks } from '../bookmarks';

const mockUser = {
    username: 'testUser2',
    password: 'testPassword2',
    role: 'User',
}

const getMockAuthContextValue = (userType: User) => {
    const mockAuthContextValue = {
      data: [userType],
      loginUser: jest.fn(),
      isUserAuthenticated: jest.fn().mockReturnValue(true),
      getUser: jest.fn().mockReturnValue(userType),
      logout: jest.fn(),
    };
  
    return mockAuthContextValue;
};

describe('renders Bookmarks', () => {
    beforeEach(async () => {
        render(
            <Bookmarks />,
            {
              wrapper: ({ children }) =>
                    <BrowserRouter>
                        <AuthContext.Provider value={getMockAuthContextValue(mockUser)}>
                            {children}
                        </AuthContext.Provider>
                    </BrowserRouter>
            }   
        );
    });

    it('renders a title', async () => {
        expect(screen.getByText('Bookmarks')).toBeInTheDocument();
    });

    it('renders a list of bookmarks', async () => {
        expect(screen.getByTestId('articles-list')).toBeInTheDocument();
    });
});