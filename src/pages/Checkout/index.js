import { Link, useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { Title } from '../../components/Title';
import { Box, Container, Wrapper } from './styles';

export const Checkout = () => {
  const { id } = useParams();
  const theme = useTheme();
  const mock = [
    [
      '+55 079 999646105',
      'Retirada',
      'Pix',
      ['cenoura - 200g', 'berinjela - 200g', 'tomate - 200g', 'maça - 200g'],
      '200',
    ],
    [
      '+55 079 999646105',
      'Retirada',
      'Pix',
      ['cenoura - 200g', 'cenoura - 200g', 'cenoura - 200g', 'cenoura - 200g'],
      '200',
    ],
    [
      '+55 079 999646105',
      'Retirada',
      'Pix',
      ['cenoura - 200g', 'cenoura - 200g', 'cenoura - 200g', 'cenoura - 200g'],
      '200',
    ],
    [
      '+55 079 999646105',
      'Retirada',
      'Pix',
      ['cenoura - 200g', 'cenoura - 200g', 'cenoura - 200g', 'cenoura - 200g'],
      '200',
    ],
  ];

  return (
    <Container>
      <Logo icon="home" to="/" />
      <Title icon="block" text="Informações sobre a compra" to="/seller/:id" />
      <Wrapper>
        <p>
          Fale com o produtor:
          <span>{mock[0][0]}</span>
        </p>
        <p>
          Forma de entrega:
          <span>{mock[0][1]}</span>
        </p>
        <p>
          Forma de pagamento:
          <span>{mock[0][2]}</span>
        </p>
        <p>
          Detalhes da compra:
          {mock[0][3].map(item => (
            <>
              <br />
              <span key={item}>{item}</span>
            </>
          ))}
        </p>
        <h3>
          Total da compra:
          <span>R${mock[0][4]}</span>
        </h3>
      </Wrapper>
      <Box>
        <Link to={`details/${id}`}>
          <Button backgroundColor={theme.palettes.secondaryPurple.main}>Cofirmar Pedido</Button>
        </Link>
        <Link to={`seller/${id}`}>
          <Button backgroundColor={theme.palettes.neutral.v2} color={theme.palettes.black}>
            Cancelar
          </Button>
        </Link>
      </Box>
      <Footer>Organikos</Footer>
    </Container>
  );
};
