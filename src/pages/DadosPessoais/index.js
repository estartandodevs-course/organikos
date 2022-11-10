import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { InputForm } from '../../components/InputForm';
import { Logo } from '../../components/Logo';
import { NavForm } from '../../components/NavForm';
import { FormContainer, Crate, Right, Left, Wrapper, BoxSwitch, Container } from './styles';

export const DadosPessoais = () => {
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
              <label>Name</label>
              <InputForm size="big" type="text" text="Lucas" />
            </Crate>
            <Crate>
              <label>Sobrenome</label>
              <InputForm size="big" type="text" text="Silva" />
            </Crate>
            <Crate>
              <label>E-mail</label>
              <InputForm size="big" type="email" text="lucassilvax005x@gmail.com" />
            </Crate>
            <Wrapper>
              <Crate>
                <label>Telefone</label>
                <InputForm size="small" type="number" text="(79) 999646105" />
              </Crate>
              <BoxSwitch>
                <span>Deseja receber Notificações via WhatsApp?</span>
              </BoxSwitch>
            </Wrapper>
          </Left>
          <Right>
            <Link to="/enderecos">
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
