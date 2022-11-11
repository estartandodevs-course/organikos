import { Link } from 'react-router-dom';
import { Container } from './styles';

export const Bag = ({ userId }) => {
  return (
    <Container>
      <img src="../assets/icons/bag.svg" alt="icone carrinho" />
      <Link to={`/bag/${userId}`}>
        <p>Visualizar carrinho</p>
      </Link>
    </Container>
  );
};
