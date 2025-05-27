import React, { createContext, useState, useContext, useEffect } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
}

const mockUser: User = {
  id: 'admin-001',
  username: 'admin',
  fullName: 'School Administrator',
  email: 'admin@edunaija.com',
  role: UserRole.ADMIN,
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  lastLogin: new Date(),
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real app, you would make an API call here
      // This is just a mock implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (username === 'admin' && password === 'password') {
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
      } else {
        throw new Error('Invalid username or password');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during login');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};