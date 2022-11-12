import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { InputForm } from '../../components/InputForm';
import { Logo } from '../../components/Logo';
import { NavForm } from '../../components/NavForm';
import { SwitchCheck } from '../../components/Switch';
import { AuthContext } from '../../contexts/AuthContext';
import { FormContainer, Crate, Right, Left, Wrapper, BoxSwitch, Container } from './styles';

export const PersonalData = () => {
  const theme = useTheme();
  const { user } = useContext(AuthContext);
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
              <label>Name</label>
              <InputForm size="big" type="text" text={user.name} />
            </Crate>
            <Crate>
              <label>Sobrenome</label>
              <InputForm size="big" type="text" text={user?.lastName} />
            </Crate>
            <Crate>
              <label>E-mail</label>
              <InputForm size="big" type="email" text={user.email} />
            </Crate>
            <Wrapper>
              <Crate>
                <label>Telefone</label>
                <InputForm size="small" type="number" text={user.phone} />
              </Crate>
              <BoxSwitch>
                <SwitchCheck text="Deseja receber Notificações via WhatsApp?" />
              </BoxSwitch>
            </Wrapper>
          </Left>
          <Right>
            <Link to="/address">
              <Button type="submit" backgroundColor={theme.palettes.secondaryPurple.main}>
                Salvar
              </Button>
            </Link>
            <Link to="/home">
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
