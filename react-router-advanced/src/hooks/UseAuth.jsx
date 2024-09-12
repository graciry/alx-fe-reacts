import { useState } from 'react';

// Simulate authentication state
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate login and logout functions
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return {
    isAuthenticated,
    login,
    logout,
  };
}
