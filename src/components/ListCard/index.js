import { useEffect, useState } from 'react';
import { getSeller } from '../../services/sellerService';
import { CardSeller } from '../CardSeller';
import { Ul } from './styles';

export const SellerList = () => {
  const [listSeller, setListSeller] = useState([]);

  useEffect(() => {
    const generateSellerPromises = () =>
      Array(12)
        .fill()
        .map((_, index) => getSeller(index + 1).then(response => response.data));

    const sellerPromises = generateSellerPromises();

    Promise.all(sellerPromises).then(seller => setListSeller(seller));
  }, []);

  return (
    <Ul>
      {listSeller?.map(seller => {
        return (
          <li key={seller.sellerId}>
            <CardSeller seller={seller} />
          </li>
        );
      })}
    </Ul>
  );
};
