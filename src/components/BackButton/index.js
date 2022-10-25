import { Link } from 'react-router-dom';
import { ButtonStyled } from './styles';

export const BackButton = ({ children }) => {
  return (
    <Link to="/">
      <ButtonStyled>
        <img src="../assets/icons/back-icon-straw.svg" alt="seta para voltar" />
        {children}
      </ButtonStyled>
    </Link>
  );
};
