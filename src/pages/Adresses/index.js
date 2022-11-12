import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { InputForm } from '../../components/InputForm';
import { Logo } from '../../components/Logo';
import { NavForm } from '../../components/NavForm';
import { AuthContext } from '../../contexts/AuthContext';
import { Container, Crate, FormContainer, Left, Right, Wrapper } from './styles';

export const Adresses = () => {
  const { user } = useContext(AuthContext);
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
              <InputForm size="small" type="number" text={user?.address?.zipCode} />
            </Crate>
            <Wrapper>
              <Crate>
                <label>Estado</label>
                <InputForm size="tiny" type="text" text={user?.address?.state} />
              </Crate>
              <Crate>
                <label>Cidade</label>
                <InputForm size="small" type="text" text={user?.address?.city} />
              </Crate>
            </Wrapper>
            <Crate>
              <label>Bairro</label>
              <InputForm size="big" type="text" text={user?.address?.district} />
            </Crate>
            <Crate>
              <label>Rua</label>
              <InputForm size="big" type="text" text={user?.address?.street} />
            </Crate>
            <Wrapper>
              <Crate>
                <label>Número</label>
                <InputForm size="tiny" type="number" text={user?.address?.number} />
              </Crate>
              <Crate>
                <label>Complemento</label>
                <InputForm size="small" type="text" text={user?.address?.complement} />
              </Crate>
            </Wrapper>
          </Left>
          <Right>
            <Link to="/payment">
              <Button type="submit" backgroundColor={theme.palettes.secondaryPurple.main}>
                Salvar
              </Button>
            </Link>
            <Link to="/personaldata">
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
