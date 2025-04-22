import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [idk, setIdk]= useState(null);
  const [npk, setNpk] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const userData = JSON.parse(localStorage.getItem("user"));
    const idk = JSON.parse(localStorage.getItem("idk"));
    const npk = JSON.parse(localStorage.getItem("npk"));

    if (token && userData && idk && npk) {
      setIsAuth(true);
      setUser(userData);
      setIdk(idk);
      setNpk(npk);
    }
  }, []);

  const login = (token, userData, idk,npk) => {
    localStorage.setItem('access_token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('idk', JSON.stringify(idk));
    localStorage.setItem('npk', JSON.stringify(npk));
    setIsAuth(true);
    setUser(userData);
    setIdk(idk);
    setNpk(npk);
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    setIsAuth(false); 
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout,user,idk,npk,setNpk}}>
      {children}
    </AuthContext.Provider>
  );
};
