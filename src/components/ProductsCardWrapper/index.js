import { bagMock } from '../../mocks/bag';
import { ProductCard } from '../ProductCard';
import { Container, Wrapper } from './styles';
import { v4 as uuidv4 } from 'uuid';

export const ProductsCardWrapper = ({ backGroundColor }) => {
  return (
    <Container backGroundColor={backGroundColor}>
      <Wrapper>
        {bagMock.map(product => (
          <ProductCard key={product[1] + uuidv4()} product={product} size="20px" />
        ))}
      </Wrapper>
    </Container>
  );
};
