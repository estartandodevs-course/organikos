import { Container } from './styles';
import { Link } from 'react-router-dom';

export const Title = ({ text, icon, to }) => {
  return (
    <Container icon={icon}>
      <Link to={to}>
        <img src="assets/icons/back-icon.svg" alt="back icon" />
      </Link>
      <p>{text}</p>
    </Container>
  );
};
