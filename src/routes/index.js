import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages';
import { BagPage } from '../pages/BagPage';
import { Checkout } from '../pages/Checkout';
import { Details } from '../pages/Details';
import { Historic } from '../pages/Historic';
import { Seller } from '../pages/Seller';

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seller/:id" element={<Seller />} />
      <Route path="/bag" element={<BagPage />} />
      <Route path="/checkout/:id" element={<Checkout />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/feedback" element={<p>Avaliação</p>} />
      <Route path="/historic" element={<Historic />} />
    </Routes>
  );
};
