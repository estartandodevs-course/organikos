import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { historyList } from '../../mocks/historyList';
import { OrderCardList } from '../../components/OrderCardList';
import { Title } from '../../components/Title';
import { Container } from './styles';

export const Historic = () => {
  return (
    <Container>
      <Logo icon="home" to="/home" />
      <Title text="Historico de Pedidos" icon="block" to="/" />
      <OrderCardList historyList={historyList} />
      <Footer>Organikos</Footer>
    </Container>
  );
};
