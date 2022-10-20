import { Container, Wrapper, Image, Title, Box } from './styles';
import { useTheme } from 'styled-components';
import { Avatar } from '../Avatar';

export const Logo = () => {
  const theme = useTheme();

  return (
    <Container>
      <Image src="/assets/images/logo.png" alt="logo" />
      <Title> O lugar ideal para quem busca produtos orgânicos, direto com o produtor. </Title>
      <Box>
        <Wrapper>
          <Avatar size="small" backgroundColor={theme.palettes.secondaryPurple.v4} />
          <p>Usuário</p>
        </Wrapper>
        <img src="assets/icons/cart.svg" alt="icon car" />
      </Box>
    </Container>
  );
};
