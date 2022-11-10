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
      <Route path="/bag" element={<BagPage />} />
      <Route path="/checkout/:id" element={<Checkout />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/historic" element={<Historic />} />
      <Route path="/dadospessoais" element={<DadosPessoais />} />
      <Route path="/enderecos" element={<Enderecos />} />
      <Route path="/pagamentos" element={<Pagamentos />} />
    </Routes>
  );
};
