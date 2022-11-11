import { useState } from 'react';
import { createContext } from 'react';
import { getUserByEmail } from '../services/sellerService';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const signin = email => {
    const userPromise = getUserByEmail(email);
    userPromise
      .then(user => {
        setUser(user.data);
      })
      .catch(() => {
        setError('Usuário não cadastrado');
      });
  };

  return <AuthContext.Provider value={{ user, signin, error, signed: !!user }}>{children}</AuthContext.Provider>;
};
