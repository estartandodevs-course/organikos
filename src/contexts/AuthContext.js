import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getUserByEmail } from '../services/sellerService';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  localStorage.setItem('userToken', JSON.stringify({}));
  const userToken = localStorage.getItem('userToken');
  const [user, setUser] = useState(JSON.parse(userToken));
  const [error, setError] = useState();

  useEffect(() => {
    localStorage.setItem('userToken', JSON.stringify(user));
  }, [user]);

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

  return <AuthContext.Provider value={{ user, signin, error }}>{children}</AuthContext.Provider>;
};
