import { Container, Wrapper, Image, Title, Box } from './styles';
import { useTheme } from 'styled-components';
import { Avatar } from '../Avatar';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const Logo = ({ icon, to }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Container>
      <Image src="../../assets/images/logo.png" alt="logo" />
      <Title> O lugar ideal para quem busca produtos orgânicos, direto com o produtor. </Title>
      <Box>
        <Wrapper onClick={() => navigate('/personaldata')}>
          <Avatar size="small" backgroundColor={theme.palettes.secondaryPurple.v4} />
          <p>{user?.name}</p>
        </Wrapper>
        <Link to={to}>
          <img src={`../../assets/icons/icons-profile/${icon}.svg`} alt="icon car" />
        </Link>
      </Box>
    </Container>
  );
};
