import { BackButton } from '../../components/BackButton';
import { Footer } from '../../components/Footer';
import { ProfileSeller } from '../../components/ProfileSeller';
import { Title } from '../../components/Title';
import { Box, Container, Crate } from './styles';
import { ProductsCardWrapper } from '../../components/ProductsCardWrapper';
import { useParams } from 'react-router-dom';

export const BagPage = () => {
  const { id } = useParams();
  return (
    <Container>
      <ProfileSeller />
      <Title text="Carrinho de compras - R$102,50" icon="none" />
      <Crate>
        <ProductsCardWrapper id={id} />
      </Crate>
      <Box>
        <BackButton>Voltar para a compra</BackButton>
      </Box>
      <Footer>Organikos</Footer>
    </Container>
  );
};
