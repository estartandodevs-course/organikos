import { ProductCard } from '../ProductCard';
import { Container, Wrapper } from './styles';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const ProductsCardWrapper = ({ backGroundColor, productsCart, id }) => {
  const productsCartFiltered = productsCart.filter(product => product.seller_id === id);
  const { addProductToCart, removeProductToCart } = useContext(CartContext);

  return (
    <Container backGroundColor={backGroundColor}>
      <Wrapper>
        {productsCartFiltered.map(product => (
          <ProductCard
            key={product[1] + uuidv4()}
            product={product}
            size="20px"
            onPlus={() => addProductToCart(product)}
            onMinus={() => removeProductToCart(product)}
          />
        ))}
      </Wrapper>
    </Container>
  );
};
