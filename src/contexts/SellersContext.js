import { createContext, useEffect, useState } from 'react';
import { getSeller } from '../services/sellerService';

export const SellersContext = createContext();

export const SellersContextProvider = ({ children }) => {
  const [sellerList, setSellerList] = useState([]);

  useEffect(() => {
    const generateSellerPromises = () =>
      Array(12)
        .fill()
        .map((_, index) => getSeller(index + 1).then(response => response.data));

    const sellerPromises = generateSellerPromises();

    Promise.all(sellerPromises).then(seller => setSellerList(seller));
  }, []);

  return <SellersContext.Provider value={{ sellerList }}>{children}</SellersContext.Provider>;
};
