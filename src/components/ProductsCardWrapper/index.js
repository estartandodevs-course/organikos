import { ProductCard } from '../ProductCard';
import { Container, Wrapper } from './styles';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const ProductsCardWrapper = ({ backGroundColor, id }) => {
  const { addProductToCart, removeProductToCart, getProductsBySeller } = useContext(CartContext);
  const products = getProductsBySeller(id);
  return (
    <Container backGroundColor={backGroundColor}>
      <Wrapper>
        {products.map(product => (
          <ProductCard
            key={product[1] + uuidv4()}
            product={product}
            size="20px"
            sizeProduct="60px"
            onPlus={() => addProductToCart(product)}
            onMinus={() => removeProductToCart(product)}
          />
        ))}
      </Wrapper>
    </Container>
  );
};
