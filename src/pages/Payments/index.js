import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { InputForm } from '../../components/InputForm';
import { Logo } from '../../components/Logo';
import { NavForm } from '../../components/NavForm';
import { Container, Crate, FormContainer, Left, Right, Wrapper } from './styles';

export const Payments = () => {
  const theme = useTheme();
  return (
    <div>
      <Logo icon="bag" />
      <NavForm />
      <FormContainer
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        <Container>
          <Left>
            <Crate>
              <label>Escolha um meio de Pagamento</label>
              <InputForm size="small" type="text" text="Crédito" />
            </Crate>
            <Wrapper>
              <InputForm size="small" type="date" text="Validade" />
              <InputForm size="tiny" type="number" text="CVV" />
            </Wrapper>
            <InputForm size="big" type="text" text="Nome do Titular" />
            <InputForm size="big" type="number" text="CPF/CNPJ do titular" />
            <InputForm size="big" type="text" text="Apelido do cartão (opcional)" />
          </Left>
          <Right>
            <Link to="/home">
              <Button type="submit" backgroundColor={theme.palettes.secondaryPurple.main}>
                Salvar
              </Button>
            </Link>
            <Link to="/address">
              <Button type="button" backgroundColor={theme.palettes.neutral.v2} color={theme.palettes.black}>
                Cancelar
              </Button>
            </Link>
          </Right>
        </Container>
      </FormContainer>
      <Footer>Organikos</Footer>
    </div>
  );
};
