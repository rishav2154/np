import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  exportNumber?: string;
  importNumber?: string;
  userType: 'importer' | 'exporter' | 'both';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
  register: (userData: Omit<User, 'id'>) => void;
  loginWithCredentials: (email: string, password: string) => Promise<boolean>;
  registerUser: (userData: any) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = 'http://localhost:5000/api';

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('neosankalp_user', JSON.stringify(userData));
    const token = localStorage.getItem('neosankalp_token');
    if (token) {
      localStorage.setItem('neosankalp_token', token);
    }
  };

  const loginWithCredentials = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token and user data
        localStorage.setItem('neosankalp_token', data.token);
        localStorage.setItem('neosankalp_user', JSON.stringify(data.user));
        setUser(data.user);
        return true;
      } else {
        console.error('Login failed:', data.error);
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (userData: any): Promise<boolean> => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token and user data
        localStorage.setItem('neosankalp_token', data.token);
        localStorage.setItem('neosankalp_user', JSON.stringify(data.user));
        setUser(data.user);
        return true;
      } else {
        console.error('Registration failed:', data.error);
        return false;
      }
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('neosankalp_user');
    localStorage.removeItem('neosankalp_token');
  };

  const register = (userData: Omit<User, 'id'>) => {
    const newUser: User = {
      ...userData,
      id: Date.now().toString()
    };
    setUser(newUser);
    localStorage.setItem('neosankalp_user', JSON.stringify(newUser));
  };

  React.useEffect(() => {
    const savedUser = localStorage.getItem('neosankalp_user');
    const savedToken = localStorage.getItem('neosankalp_token');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      logout,
      register,
      loginWithCredentials,
      registerUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};