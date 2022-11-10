import { Route, Routes } from 'react-router-dom';
import { BagPage, Checkout, Details, Feedback, Historic, Home, Seller } from '../pages';
import { PersonalData } from '../pages/DadosPessoais';
import { Adresses } from '../pages/Enderecos';
import { Payments } from '../pages/Pagamentos';

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
      <Route path="/dadospessoais" element={<PersonalData />} />
      <Route path="/enderecos" element={<Adresses />} />
      <Route path="/pagamentos" element={<Payments />} />
    </Routes>
  );
};
