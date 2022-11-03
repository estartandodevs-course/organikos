import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSeller } from '../../services/sellerService';
import { Avatar } from '../Avatar';
import { useTheme } from 'styled-components';
import { Container, Wrapper, NameSeller, InfoSeller, Km, Box, Crate } from './styles';
import { Link } from 'react-router-dom';
import { ModalContext } from '../../contexts/ModalContext';
import { ProfileSellerSkeleton } from './ProfileSellerSkeleton';

export const ProfileSeller = ({ to = '#' }) => {
  const [seller, setSeller] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { handleModalClose } = useContext(ModalContext);
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
          <NameSeller>{seller.contact.name} </NameSeller>
          <InfoSeller>
            {seller.contact.address.street}, n*{seller.contact.address.number} - {seller.contact.address.neighborhood},
            {seller.contact.address.city}
          </InfoSeller>
          <Km>3km</Km>
        </Box>
      </Wrapper>
      <Crate>
        <Link to={to}>
          <img src="../assets/icons/back-icon.svg" alt="back icon" />
        </Link>
        <img onClick={handleModalClose} src="../assets/icons/icons-profile/info.svg" alt="info icon" />
      </Crate>
    </Container>
  );
};
