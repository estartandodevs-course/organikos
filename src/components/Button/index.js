import { ButtonStyled } from './styles';

export const Button = props => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
};
