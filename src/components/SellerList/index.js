import { CardSeller } from '../CardSeller';
import { Ul } from './styles';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { SellersContext } from '../../contexts/SellersContext';
import { CardSellerSkeleton } from '../CardSeller/CardSellerSkeleton';

export const SellerList = () => {
  const { sellerList, isLoading } = useContext(SellersContext);

  return (
    <Ul>
      {isLoading && <CardSellerSkeleton number={12} />}
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
