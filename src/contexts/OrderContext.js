import { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const [payment, setPayment] = useState('Pix');
  const [distribution, setDistribution] = useState('Entrega em casa');

  const handlePayment = value => {
    setPayment(value);
  };

  const handleDistribution = value => {
    setDistribution(value);
  };

  const resetPaymentDistribution = () => {
    setDistribution('Entrega em casa');
    setPayment('Pix');
  };

  return (
    <OrderContext.Provider
      value={{ handlePayment, handleDistribution, payment, distribution, resetPaymentDistribution }}
    >
      {children}
    </OrderContext.Provider>
  );
};
