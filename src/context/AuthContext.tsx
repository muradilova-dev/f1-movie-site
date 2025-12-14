import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext<any>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('f1-user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (email: string) => {
    const fakeUser = { email, name: email.split('@')[0] };
    setUser(fakeUser);
    localStorage.setItem('f1-user', JSON.stringify(fakeUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('f1-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};