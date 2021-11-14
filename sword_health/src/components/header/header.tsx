import React from 'react';
import { useLogin } from '../../hooks/useLogin';

import { Container, Image, Link, LinkText, FeaturesWrapper, Button } from './styles';
import image from '../../assets/logo.png';

export const Header: React.FC = () => {
    const { isUserAuthenticated, getUser, logout } = useLogin();

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        logout();
    }

    return (
        <header>
            <Container>
                <Image src={image} alt="logo" />
                <FeaturesWrapper>
                    {isUserAuthenticated() ? (
                        <>  
                            <Link to="/login">
                                <Button onClick={handleClick}>
                                    Logout
                                </Button>
                            </Link>
                            <Link to="/articles">
                                <LinkText>Articles</LinkText>
                            </Link>
                            {getUser()?.role !== 'Admin' && (
                                <>
                                    <Link to="/my-bookmarks">
                                        <LinkText>Bookmarks</LinkText>
                                    </Link>
                                    <Link to="/create-article">
                                        <LinkText>Write!</LinkText>
                                    </Link>
                                </>
                            )}
                            <Link to ="my-drafts">
                                <LinkText>Drafts</LinkText>
                            </Link>
                        </>
                    ): null}
                </FeaturesWrapper>
            </Container>
        </header>
    )
};