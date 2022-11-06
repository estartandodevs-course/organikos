import { createContext, useEffect, useState } from 'react';
import { getAllSeller } from '../services/sellerService';

export const SellersContext = createContext();

export const SellersContextProvider = ({ children }) => {
  const [sellerList, setSellerList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sellersPromise = getAllSeller();

    sellersPromise.then(sellers => {
      setSellerList(sellers.data);
      setIsLoading(false);
    });
  }, []);

  return <SellersContext.Provider value={{ sellerList, isLoading }}>{children}</SellersContext.Provider>;
};
