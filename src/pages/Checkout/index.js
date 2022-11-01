import { Link, useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { Title } from '../../components/Title';
import { Box, Container, Crate, Receptacle } from './styles';
import { InputSearch } from '../../components/InputSearch';
import { Infos } from '../../components/Infos';

export const Checkout = () => {
  const { id } = useParams();
  const theme = useTheme();

  return (
    <Container>
      <Logo icon="home" to="/" />
      <Receptacle>
        <InputSearch />
      </Receptacle>
      <Title icon="block" text="Informações sobre a compra" to="/seller/:id" />
      <Crate>
        <Infos />
        <Box>
          <Link to={`/details/${id}`}>
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
