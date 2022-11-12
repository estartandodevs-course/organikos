import { Link, useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { Title } from '../../components/Title';
import { Box, Container, Crate, Wrapper } from './styles';
import { useContext, useEffect, useState } from 'react';
import { getSeller } from '../../services/sellerService';
import { LogoAnimation } from '../../components/LogoAnimation';
import { MainWrapper } from '../../templates/MainWrapper';
import { OrderContext } from '../../contexts/OrderContext';
import { CartContext } from '../../contexts/CartContext';

export const Checkout = () => {
  const [seller, setSeller] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { payment, distribution } = useContext(OrderContext);
  const { getProductsBySeller, cartTotal, resetPaymentDistribution } = useContext(CartContext);
  const { id } = useParams();
  const theme = useTheme();

  const productsFiltered = getProductsBySeller(id);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await getSeller(id);
        setSeller(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  if (isError) {
    return <div>Ooops! Algo de errado aconteceu!</div>;
  }

  if (isLoading) {
    return (
      <MainWrapper>
        <LogoAnimation />
      </MainWrapper>
    );
  }

  return (
    <Container>
      <Logo icon="home" to="/home" />
      <Title icon="block" text="Informações sobre a compra" to="/seller/:id" />
      <Crate>
        <Wrapper>
          <p>
            Fale com o produtor:
            <span>{seller?.contact?.phone?.number}</span>
          </p>
          <p>
            Forma de entrega:
            <span>{distribution}</span>
          </p>
          <p>
            Forma de pagamento:
            <span>{payment}</span>
          </p>
          <ul>
            <p>Detalhes da compra:</p>
            {productsFiltered.map((item, index) => (
              <li key={index}>
                <br />
                <span>{item.quantity + item.measure + ' de ' + item.name}</span>
              </li>
            ))}
          </ul>
          <h3>
            Total da compra:
            <span>R${cartTotal.toFixed()}</span>
          </h3>
        </Wrapper>
        <Box>
          <Link to={`/home`} onClick={resetPaymentDistribution}>
            <Button backgroundColor={theme.palettes.secondaryPurple.main} type="submit">
              Cofirmar Pedido
            </Button>
          </Link>
          <Link to={`/seller/${id}`} onClick={resetPaymentDistribution}>
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
