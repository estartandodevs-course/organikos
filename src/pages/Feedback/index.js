import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { OrderCard } from '../../components/OrderCard';
import { Title } from '../../components/Title';
import { Box, Case, Cashier, Container, Crate, Receptacle, Wrapper } from './styles';
import { historyList } from '../../mocks/historyList';
import { Rating } from '../../components/Rating';
import { useState } from 'react';
import { infoOrder } from '../../mocks/infoOrder';
import { InputSearch } from '../../components/InputSearch';

export const Feedback = () => {
  const [ratingNumber, setRatingNumber] = useState(0);

  return (
    <Container>
      <Logo icon="home" to="/home" />
      <Receptacle>
        <InputSearch />
      </Receptacle>
      <Title text="Avalie sua Compra" />
      <Crate>
        <Wrapper>
          <p>
            Fale com o produtor:
            <span>{infoOrder[0][0]}</span>
          </p>
          <p>
            Status do Pedido:
            <span>{infoOrder[0][5]}</span>
          </p>
          <p>
            Forma de entrega:
            <span>{infoOrder[0][1]}</span>
          </p>
          <p>
            Forma de pagamento:
            <span>{infoOrder[0][2]}</span>
          </p>
          <ul>
            <p>Detalhes da compra:</p>
            {infoOrder[0][3].map((item, index) => (
              <li key={index}>
                <br />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h3>
            Total da compra:
            <span>R${infoOrder[0][4]}</span>
          </h3>
        </Wrapper>
        <Case>
          <h3>Pedido Recebido:</h3>
          <Cashier>
            <OrderCard history={historyList[0]} />
          </Cashier>
        </Case>
        <Box>
          <h3>Avalie aqui os produtos recebidos</h3>
          <Rating size="big" rating={ratingNumber} setRatingNumber={setRatingNumber} />
          <Link to="/home">
            <p>Avaliar mais tarde</p>
          </Link>
        </Box>
      </Crate>
      <Footer>Organikos</Footer>
    </Container>
  );
};
