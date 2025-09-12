import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Stores user info, e.g., { username: 'john_doe' }

  // Simulate checking for a logged-in user on app load
  useEffect(() => {
    const storedUser = localStorage.getItem('aiGymUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (username, password) => {
    // In a real app, you'd send these credentials to your Django backend.
    // For now, we simulate a successful login.
    const mockUser = { username: username };
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('aiGymUser', JSON.stringify(mockUser)); // Persist mock user
    return true; // Simulate success
  };

  const signup = (username, email, password) => {
    // In a real app, you'd send these details to your Django backend to create a new user.
    // For now, we simulate a successful signup and immediate login.
    const mockUser = { username: username, email: email };
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('aiGymUser', JSON.stringify(mockUser)); // Persist mock user
    return true; // Simulate success
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('aiGymUser'); // Clear user from storage
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};