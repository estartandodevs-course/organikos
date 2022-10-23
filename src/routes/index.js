import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages';
import { Seller } from '../pages/Seller';

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seller/:id" element={<Seller />} />
      <Route path="/bag" element={<p>carrinho</p>} />
      <Route path="/checkout/:id" element={<p>Finalizando pedido</p>} />
      <Route path="/details/:id" element={<p>Detalhes da compra</p>} />
      <Route path="/feedback" element={<p>Avaliação</p>} />
      <Route path="/historic" element={<p>Historico</p>} />
    </Routes>
  );
};
