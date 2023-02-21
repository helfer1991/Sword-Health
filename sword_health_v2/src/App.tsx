import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import { SignUp } from './pages/sign-up';
import { Login } from './pages/login';
import { Header } from './components/header';
import { CreateArticle } from './pages/create-article';
import { Articles } from './pages/articles';
import { Bookmarks } from './pages/bookmarks';
import { Drafts } from './pages/drafts';
import { useLogin } from './hooks/useLogin';
import { Container, RoutesContainer, GlobalStyle } from './styles';
import { Footer } from './components/footer';

function App() {
  const { isUserAuthenticated, getUser } = useLogin();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(isUserAuthenticated());

  return (
      <Container>
        <GlobalStyle />
        <Header />
        <RoutesContainer>
          <Routes>
            <Route path="/" element={getUser() ? <Articles/> : <Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/articles" element={isAuthenticated ? <Articles/> : <Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/create-article" element={isAuthenticated ? <CreateArticle /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/sign-up" element={getUser() ? <Articles /> : <SignUp />} />
            <Route path="/my-bookmarks" element={isAuthenticated ? <Bookmarks /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/my-drafts" element={isAuthenticated ? <Drafts /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
          </Routes>
        </RoutesContainer>
        <Footer />
      </Container>
  )
}

export default App
