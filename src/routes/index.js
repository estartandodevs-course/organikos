import { Route, Routes } from 'react-router-dom';
import {
  BagPage,
  Checkout,
  Details,
  Feedback,
  Historic,
  Home,
  Seller,
  PersonalData,
  Address,
  Payments,
  Login,
} from '../pages';

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/seller/:id" element={<Seller />} />
      <Route path="/seller/:id/checkout" element={<Checkout />} />
      <Route path="/bag/:id" element={<BagPage />} />
      <Route path="/historic" element={<Historic />} />
      <Route path="/historic/:id" element={<Details />} />
      <Route path="/historic/:id/feedback" element={<Feedback />} />
      <Route path="/personaldata" element={<PersonalData />} />
      <Route path="/address" element={<Address />} />
      <Route path="/payment" element={<Payments />} />
    </Routes>
  );
};
