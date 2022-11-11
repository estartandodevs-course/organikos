import { Link, useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { Title } from '../../components/Title';
import { Receptacle } from '../../components/Receptacle';
import { InputSearch } from '../../components/InputSearch';
import { Box, Container, Crate, Wrapper } from './styles';
import { infoOrder } from '../../mocks/infoOrder';

export const Checkout = () => {
  const { id } = useParams();
  const theme = useTheme();

  return (
    <Container>
      <Logo icon="home" to="/home" />
      <Receptacle>
        <InputSearch />
      </Receptacle>
      <Title icon="block" text="Informações sobre a compra" to="/seller/:id" />
      <Crate>
        <Wrapper>
          <p>
            Fale com o produtor:
            <span>{infoOrder[0][0]}</span>
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
        <Box>
          <Link to={`/home`}>
            <Button backgroundColor={theme.palettes.secondaryPurple.main}>Cofirmar Pedido</Button>
          </Link>
          <Link to={`/seller/${id}`}>
            <Button backgroundColor={theme.palettes.neutral.v2} color={theme.palettes.black}>
              Cancelar
            </Button>
          </Link>
        </Box>
      </Crate>
      <Footer>Organikos</Footer>
    </Container>
  );
};
