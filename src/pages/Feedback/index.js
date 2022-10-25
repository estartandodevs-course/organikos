import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { OrderCard } from '../../components/OrderCard';
import { Title } from '../../components/Title';
import { Box, Container, Crate, Wrapper } from './styles';
import { historyList } from '../../mocks/historyList';
import { Rating } from '../../components/Rating';
import { useState } from 'react';

export const Feedback = () => {
  const [ratingNumber, setRatingNumber] = useState(0);

  return (
    <Container>
      <Logo icon="home" to="/" />
      <Title text="Avalie sua Compra" />
      <Wrapper>
        <p>Pedido Recebido:</p>
        <Crate>
          <OrderCard history={historyList[0]} />
        </Crate>
      </Wrapper>
      <Box>
        <h3>Avalie aqui os produtos recebidos</h3>
        <Rating size="big" rating={ratingNumber} setRatingNumber={setRatingNumber} />
        <Link to="/">
          <p>Avaliar mais tarde</p>
        </Link>
      </Box>
      <Footer>Organikos</Footer>
    </Container>
  );
};
