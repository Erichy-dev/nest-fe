import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User } from '../types';
import { useNavigate } from 'react-router-dom';

export interface AuthContextType {
  user: User | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Intenta recuperar el usuario de SessionStorage al iniciar
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const handleLogout = () => {
      console.log('Logout event captured');
      logout();
    };

    window.addEventListener('logout', handleLogout);

    return () => {
      window.removeEventListener('logout', handleLogout);
    };
  }, []);

  const login = (user: User, token: string) => {
    sessionStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    sessionStorage.setItem('access_token', token);
  };

  const logout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
    sessionStorage.removeItem('access_token');
    const path = `${import.meta.env.BASE_URL}`;
    navigate(path);
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
