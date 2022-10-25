import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { OrderCardList } from '../../components/OrderCardList';
import { Title } from '../../components/Title';
import { Container } from './styles';

export const Historic = () => {
  return (
    <Container>
      <Logo icon="home" to="/" />
      <Title text="Historico de Pedidos" icon="block" to="/" />
      <OrderCardList />
      <Footer>Organikos</Footer>
    </Container>
  );
};
