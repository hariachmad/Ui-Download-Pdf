import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [idk, setIdk]= useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const userData = JSON.parse(localStorage.getItem("user"));
    const idk = JSON.parse(localStorage.getItem("idk"));

    if (token && userData && idk) {
      setIsAuth(true);
      setUser(userData);
      setIdk(idk);
    }
  }, []);

  const login = (token, userData, idk) => {
    localStorage.setItem('access_token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('idk', JSON.stringify(idk));
    setIsAuth(true);
    setUser(userData);
    setIdk(idk);
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    setIsAuth(false); 
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout,user,idk }}>
      {children}
    </AuthContext.Provider>
  );
};
