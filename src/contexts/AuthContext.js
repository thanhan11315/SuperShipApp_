import React, {createContext, useState} from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const users = [
  {
    email: '0898999907',
    password: '12345678',
  },
  {
    email: 'user2@example.com',
    password: 'password2',
  },
];

export const AuthContextProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    const user = users.find(user => user.email === email);
    if (!user) {
      return 'wrong_email';
    }
    if (user.password !== password) {
      return 'wrong_password';
    }
    setIsLoggedIn(true);
    return 'success';
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
