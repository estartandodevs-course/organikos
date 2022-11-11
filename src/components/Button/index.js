import { ButtonStyled } from './styles';

export const Button = props => {
  return (
    <ButtonStyled {...props} type={props.type}>
      {props.children}
    </ButtonStyled>
  );
};
