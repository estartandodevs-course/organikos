import { Route, Routes } from 'react-router-dom';
import { BagPage, Checkout, Details, Feedback, Historic, Home, Seller } from '../pages';

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seller/:id" element={<Seller />} />
      <Route path="/bag" element={<BagPage />} />
      <Route path="/checkout/:id" element={<Checkout />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/historic" element={<Historic />} />
    </Routes>
  );
};
