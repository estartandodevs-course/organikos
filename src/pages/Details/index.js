import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { Title } from '../../components/Title';
import { Box, Container, Crate, Wrapper } from './styles';
import { infoOrder } from '../../mocks/infoOrder';

export const Details = () => {
  const theme = useTheme();

  return (
    <Container>
      <Logo icon="home" to="/" />
      <Title icon="block" text="Compra Finalizada" to="/checkout/:id" />
      <Wrapper>
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
          {infoOrder[0][3].map(item => (
            <>
              <br />
              <li key={item}>{item}</li>
            </>
          ))}
        </ul>
        <Crate>
          <h3>Total da compra: R${infoOrder[0][4]}</h3>
          <p>Fale com o produtor: {infoOrder[0][0]}</p>
        </Crate>
      </Wrapper>
      <Box>
        <Link to="/feedback">
          <Button backgroundColor={theme.palettes.secondaryPurple.main}>Pedido Recebido</Button>
        </Link>
      </Box>
      <Footer>Organikos</Footer>
    </Container>
  );
};
