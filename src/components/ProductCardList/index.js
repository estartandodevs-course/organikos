import { Container } from './styles';
import { products } from '../../mocks/products';
import { ProductCard } from '../ProductCard';
import { v4 as uuidv4 } from 'uuid';

export const ProductCardList = () => {
  return (
    <Container>
      {products.map(product => (
        <ProductCard key={product[1] + uuidv4()} product={product} />
      ))}
    </Container>
  );
};
