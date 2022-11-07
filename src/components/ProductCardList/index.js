import { Container } from './styles';
import { ProductCard } from '../ProductCard';
import { ProductCardSkeleton } from '../ProductCard/ProductCardSkeleton';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductsBySeller } from '../../services/sellerService';

export const ProductCardList = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
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

  return (
    <Container>
      {loading && <ProductCardSkeleton />}
      {productsList.map(product => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </Container>
  );
};
