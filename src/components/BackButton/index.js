import { Link, useParams } from 'react-router-dom';
import { ButtonStyled } from './styles';

export const BackButton = ({ children }) => {
  const { id } = useParams();
  return (
    <Link to={`/seller/${id}`}>
      <ButtonStyled>
        <img src="/assets/icons/back-icon-straw.svg" alt="seta para voltar" />
        {children}
      </ButtonStyled>
    </Link>
  );
};
