import { Route, Routes } from 'react-router-dom';
import { BagPage, Checkout, Details, Feedback, Historic, Home, Seller } from '../pages';
import { DadosPessoais } from '../pages/DadosPessoais';
import { Enderecos } from '../pages/Enderecos';
import { Pagamentos } from '../pages/Pagamentos';

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seller/:id" element={<Seller />} />
      <Route path="/seller/:id/checkout" element={<Checkout />} />
      <Route path="/bag" element={<BagPage />} />
      <Route path="/historic" element={<Historic />} />
      <Route path="/historic/:id" element={<Details />} />
      <Route path="/historic/:id/feedback" element={<Feedback />} />
    </Routes>
  );
};
