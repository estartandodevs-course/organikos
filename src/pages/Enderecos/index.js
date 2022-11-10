import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { InputForm } from '../../components/InputForm';
import { Logo } from '../../components/Logo';
import { NavForm } from '../../components/NavForm';
import { Container, Crate, FormContainer, Left, Right, Wrapper } from './styles';

export const Enderecos = () => {
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
              <label>CEP</label>
              <InputForm size="small" type="number" text="49400000" />
            </Crate>
            <Wrapper>
              <Crate>
                <label>Estado</label>
                <InputForm size="tiny" type="text" text="Sergipe" />
              </Crate>
              <Crate>
                <label>Cidade</label>
                <InputForm size="small" type="text" text="Lagarto" />
              </Crate>
            </Wrapper>
            <Crate>
              <label>Bairro</label>
              <InputForm size="big" type="text" text="São José" />
            </Crate>
            <Crate>
              <label>Rua</label>
              <InputForm size="big" type="text" text="Rua Maria Teles" />
            </Crate>
            <Wrapper>
              <Crate>
                <label>Número</label>
                <InputForm size="tiny" type="number" text="189" />
              </Crate>
              <Crate>
                <label>Complemento</label>
                <InputForm size="small" type="text" text="Ap 101" />
              </Crate>
            </Wrapper>
          </Left>
          <Right>
            <Link to="/pagamentos">
              <Button type="submit" backgroundColor={theme.palettes.secondaryPurple.main}>
                Salvar
              </Button>
            </Link>
            <Link to="/">
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
