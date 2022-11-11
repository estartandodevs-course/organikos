import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { FormLogin } from '../../components/FormLogin';
import { Typography } from '../../components/Typography';
import { ButtonsWrapper, Container, ContainerLeft, ContainerRight } from './styles';

export const Login = () => {
  const theme = useTheme();

  return (
    <Container>
      <ContainerRight>
        <img src="../assets/images/logo.png" alt="Logo organikos" />
        <Typography variant={'h1Medium'}>Seja Bem-vindo ao Organikos</Typography>
        <FormLogin>
          <ButtonsWrapper>
            <Button backgroundColor={theme.palettes.secondaryPurple.main} type="submit">
              Login
            </Button>
            <Typography variant={'h4Light'}>ou</Typography>
            <Button backgroundColor={theme.palettes.secondaryStraw.main}>Criar Conta</Button>
          </ButtonsWrapper>
        </FormLogin>
        <Footer>Organikos</Footer>
      </ContainerRight>
      <ContainerLeft>
        <img src="../assets/images/logo.png" alt="Logo organikos" />
        <Typography variant={'h2Medium'} color={theme.palettes.secondaryStraw.v6}>
          O lugar ideal para quem busca produtos orgânicos, direto com o produtor.{' '}
        </Typography>
      </ContainerLeft>
    </Container>
  );
};
