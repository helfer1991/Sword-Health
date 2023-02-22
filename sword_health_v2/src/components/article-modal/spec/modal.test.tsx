import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthContextProvider, AuthContext} from '../../../context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { Modal } from '../modal';
import type { User } from '../../../context/AuthContext';

const mockData = {
  title: 'Test Article',
  description: 'This is a test article.',
  category: 'Test',
  image: 'test.jpg',
  details: 'Test details'
};

const mockUser = {
    username: 'testuser2',
    password: 'testpassword2',
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

describe('Modal', () => {
    const mockOnClose = jest.fn();

    describe('renders the modal when the logged in user is the one that wrote the article', () => {
        beforeEach(() => {
            render(
                <BrowserRouter>
                  <AuthContextProvider>
                    <Modal data={mockData} show onClose={mockOnClose} />
                  </AuthContextProvider>
                </BrowserRouter>
              );
        });

        it('renders the title', () => {
                expect(screen.getByText('This is a test article.')).toBeInTheDocument();
        });

        it('renders the description', () => {
                expect(screen.getByText('This is a test article.')).toBeInTheDocument();
        });

        it('renders the article details', () => {
            expect(screen.getByText('Test details')).toBeInTheDocument();
        });

        it('renders the article image', () => {
            const articleImage = screen.getByRole('img');
            expect(articleImage).toHaveAttribute('src', mockData.image);
            expect(articleImage).toHaveAttribute('alt', 'modal-image');
        });

        it('renders the close button', () => {
            const closeButton = screen.getByTestId('close-button');
            expect(closeButton).toHaveTextContent('Close');
            expect(closeButton).toBeInTheDocument();
        });

        it('renders the bookmark button', () => {
            const bookmarkButton = screen.getByTestId('bookmark-button');
        
            expect(bookmarkButton).toHaveTextContent('Bookmark');
            expect(bookmarkButton).toBeInTheDocument();
        });

        it('renders the unbookmark button', () => {
            const bookmarkButton = screen.getByTestId('bookmark-button');

            fireEvent.click(bookmarkButton);
            expect(bookmarkButton).toHaveTextContent('Unbookmark');
            expect(bookmarkButton).toBeInTheDocument();
        });

        it('renders the edit button when the logged in user is the one that wrote the article', () => {
            const editButton = screen.getByTestId('edit-button');
            expect(editButton).toHaveTextContent('Edit');
            expect(editButton).toBeInTheDocument();
        });

        it('redirets to "/create-article" when clicking on the edit button', () => {
            fireEvent.click(screen.getByTestId('edit-button'));
            expect(window.location.pathname).toBe('/create-article');
        });
    });

    describe('renders the Modal when the logged in user is not the wrote that wrote the artcile', () => {
        it('does not render the edit button when the logged in user is not the one that wrote the article', () => {
            render(
                <Modal data={mockData} show onClose={mockOnClose} />,
                {
                  wrapper: ({ children }) =>
                    <BrowserRouter>
                      <AuthContext.Provider value={getMockAuthContextValue(mockUser)}>
                        {children}
                      </AuthContext.Provider>
                    </BrowserRouter>
                }
              );
            const editButton = screen.queryByTestId('edit-button');
            expect(editButton).not.toBeInTheDocument();
        });
    });
});
