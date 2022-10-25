import { BackButton } from '../../components/BackButton';
import { Footer } from '../../components/Footer';
import { ProfileSeller } from '../../components/ProfileSeller';
import { Title } from '../../components/Title';
import { Box, Container, Wrapper } from './styles';
import { bagMock } from '../../mocks/bag';
import { ProductCard } from '../../components/ProductCard';
import { v4 as uuidv4 } from 'uuid';

export const BagPage = () => {
  return (
    <Container>
      <ProfileSeller />
      <Title text="Carrinho de compras - R$102,50" icon="none" />
      <Wrapper>
        {bagMock.map(product => (
          <ProductCard key={product[1] + uuidv4()} product={product} size="20px" />
        ))}
      </Wrapper>
      <Box>
        <BackButton>Voltar para a compra</BackButton>
      </Box>
      <Footer>Organikos</Footer>
    </Container>
  );
};
