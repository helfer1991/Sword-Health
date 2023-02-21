import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type AuthProviderProps = {
    children: React.ReactNode;
}

type User = {
    username: string;
    password: string;
    role: string;
}

type CredentialsProps = {
    username: string;
    password: string;
}

type AuthContextType = {
    data: User[];
    loginUser: ( credentials: CredentialsProps ) => boolean;
    logout: () => void;
    isUserAuthenticated: () => boolean;
    getUser: () => User | null;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthProviderProps) {
    const [data, setData] = useState<Array<User>>([]);
    const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsers =  Object.entries(localStorage)
        .filter(([key, value]) => key.startsWith('userData'))
        .map(([key, value]) => JSON.parse(value));
        if(storedUsers) {
            setData(storedUsers);
        }
    }, []);

    function loginUser(credentials: CredentialsProps) {
        setLoggedInUser(null);
        const account = data.find((user) => user.username === credentials.username);

        if(account && account.password === credentials.password) {
            setIsAuthenticated(true);
            setLoggedInUser(account);
            localStorage.setItem('authenticated', 'true');
            navigate("/articles");
            return true;
          } else {
            setIsAuthenticated(false);
            localStorage.removeItem('authenticated');
            return false;
          }
    }

    function logout() {
        setLoggedInUser(null);
        localStorage.removeItem('authenticated');
        navigate('/');
    }

    function isUserAuthenticated() {
        const isAuthenticated = localStorage.getItem('authenticated');
        return isAuthenticated === 'true';
    }

    function getUser() {
        return loggedInUser;
    }

    return (
        <AuthContext.Provider value={{ data, loginUser, isUserAuthenticated, getUser, logout }}>
            {children}
        </AuthContext.Provider>
    )
}