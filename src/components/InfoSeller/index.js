import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { getSeller } from '../../services/sellerService';
import { Avatar } from '../Avatar';
import { ProfileSellerSkeleton } from '../ProfileSeller/ProfileSellerSkeleton';
import { Box, Container, Crate, Info, Km, NameSeller, Wrapper } from './styles';

export const InfoSeller = () => {
  const [seller, setSeller] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const theme = useTheme();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await getSeller(id);
        setSeller(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  if (isLoading) {
    return <ProfileSellerSkeleton />;
  }

  return (
    <Container>
      <Wrapper>
        <Avatar size="big" backgroundColor={theme.palettes.primaryGreen.v4} />
        <Box>
          <NameSeller>{seller?.contact?.name} </NameSeller>
          <Info>
            {seller?.address?.street}, n*{seller?.address?.number} - {seller?.address?.neighborhood},
            {seller?.address?.city}
          </Info>
          <Km>3km</Km>
        </Box>
      </Wrapper>
      <Crate>
        <p>{seller?.contact?.desc}</p>
      </Crate>
    </Container>
  );
};
