import { Link } from 'react-router-dom';
import { ButtonStyled } from './styles';

export const BackButton = ({ children }) => {
  return (
    <ButtonStyled>
      <Link to="/">
        <img src="../assets/icons/back-icon-straw.svg" alt="seta para voltar" />
      </Link>
      {children}
    </ButtonStyled>
  );
};
