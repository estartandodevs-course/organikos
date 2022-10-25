import { CardSeller } from '../CardSeller';
import { Ul } from './styles';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { SellersContext } from '../../contexts/SellersContext';

export const SellerList = () => {
  const { sellerList } = useContext(SellersContext);

  return (
    <Ul>
      {sellerList?.map(seller => {
        return (
          <li key={seller.sellerId + uuidv4()}>
            <CardSeller seller={seller} />
          </li>
        );
      })}
    </Ul>
  );
};
