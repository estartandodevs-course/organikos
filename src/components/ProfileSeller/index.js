import { Avatar } from '../Avatar';
import { useTheme } from 'styled-components';
import { Container, Wrapper, NameSeller, InfoSeller, Km, Box, Crate } from './styles';
import { Link } from 'react-router-dom';

const mockSeller = {
  contact: ['Horta da Dona Clara', 'Aqui você encontra os melhores legumes'],
  address: ['São Paulo', 'Centro', 'Rua dos bobo', '1'],
  rating: ['3,7'],
};

export const ProfileSeller = ({ to }) => {
  const theme = useTheme();
  return (
    <Container>
      <Wrapper>
        <Avatar size="big" backgroundColor={theme.palettes.primaryGreen.v4} />
        <Box>
          <NameSeller>{mockSeller.contact[0]} </NameSeller>
          <InfoSeller>
            {mockSeller.address[2]}, n*{mockSeller.address[3]} - {mockSeller.address[1]}, {mockSeller.address[0]}
          </InfoSeller>
          <Km>{mockSeller.rating[0]}km</Km>
        </Box>
      </Wrapper>
      <Crate>
        <Link to={to}>
          <img src="assets/icons/back-icon.svg" alt="back icon" />
        </Link>
        <img src="assets/icons/icons-profile/info.svg" alt="info icon" />
      </Crate>
    </Container>
  );
};
