import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthContextProvider, AuthContext} from '../../../context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import type { User } from '../../../context/AuthContext';
import { ArticleCard } from '../article-card';

const article = {
  title: 'Test Article',
  description: 'This is a test article',
  image: 'test-image.jpg',
  category: 'Design',
  details: 'This is the article details',
};

const mockUser = {
    username: 'testuser',
    password: 'testpassword',
    role: 'User',
};
  
const mockUserAdmin = {
  username: 'testuser',
  password: 'testpassword',
  role: 'Admin',
};

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

describe('ArticleCard', () => {
    describe('renders the Article information', () => {
        beforeEach(() => {
            render(
              <BrowserRouter>
                <AuthContextProvider>
                  <ArticleCard data={article} />
                </AuthContextProvider>
              </BrowserRouter>
            );
        });

        it('renders the article title', () => {
            expect(screen.getByText(article.title)).toBeInTheDocument();
        });

        it('renders the article description', () => {
            expect(screen.getByText(article.description)).toBeInTheDocument();
        });

        it('renders the article image', () => {
            const articleImage = screen.getByRole('img');
            expect(articleImage).toHaveAttribute('src', article.image);
            expect(articleImage).toHaveAttribute('alt', 'article-image');
        });
    });

    describe('renders "read more" button for users with the role User', () => {
        beforeEach(() => {
          render(
            <ArticleCard data={article} />,
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

        it('renders the "read more" button with the logged in user having "User" role', () => { 
            expect(screen.getByTestId('read-more-button')).toBeInTheDocument();
        });
      
        it('does render the modal when clicking on the "read more" button', () => {
            const readMoreButton = screen.getByTestId('read-more-button');
            fireEvent.click(readMoreButton);
            expect(screen.getByTestId('article-modal')).toBeInTheDocument();
        });

        it('closes modal when clicking on close button', () => {
            const readMoreButton = screen.getByTestId('read-more-button');
            fireEvent.click(readMoreButton);
            expect(screen.getByTestId('article-modal')).toBeInTheDocument();
            
            const closeButton = screen.getByTestId('close-button');
            fireEvent.click(closeButton);

            expect(screen.queryByTestId('article-modal')).not.toBeInTheDocument();
        });
      });
      
      describe('does not render the read more button for users that have the Admin role', () => {
        it('does not render the "read more" button, because the user has "Admin" role', () => {
          render(
            <ArticleCard data={article} />,
            {
              wrapper: ({ children }) =>
                <BrowserRouter>
                  <AuthContext.Provider value={getMockAuthContextValue(mockUserAdmin)}>
                    {children}
                  </AuthContext.Provider>
                </BrowserRouter>
            }
          );
          expect(screen.queryByTestId('read-more-button')).not.toBeInTheDocument();
        });
      });
});
