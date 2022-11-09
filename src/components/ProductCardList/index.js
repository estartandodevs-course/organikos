import { Container } from './styles';
import { ProductCard } from '../ProductCard';
import { ProductCardSkeleton } from '../ProductCard/ProductCardSkeleton';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductsBySeller } from '../../services/sellerService';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { FilterContext } from '../../contexts/FilterContext';

export const ProductCardList = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addProductToCart, removeProductToCart } = useContext(CartContext);
  const { searchTerm } = useContext(FilterContext);
  const { id } = useParams();

  useEffect(() => {
    const productsPromise = getProductsBySeller(id);
    productsPromise
      .then(products => {
        setProductsList(products.data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [id]);

  const productsFiltered = productsList?.filter(product => {
    if (product?.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return product;
    }
  });

  return (
    <Container>
      {loading && <ProductCardSkeleton />}
      {productsFiltered.map(product => (
        <ProductCard
          key={product?.id}
          product={product}
          onPlus={() => addProductToCart(product)}
          onMinus={() => removeProductToCart(product)}
        />
      ))}
    </Container>
  );
};
