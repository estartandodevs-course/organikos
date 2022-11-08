import { CardSeller } from '../CardSeller';
import { Ul } from './styles';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { SellersContext } from '../../contexts/SellersContext';
import { CardSellerSkeleton } from '../CardSeller/CardSellerSkeleton';
import { FilterContext } from '../../contexts/FilterContext';

export const SellerList = () => {
  const { sellerList, isLoading } = useContext(SellersContext);
  const { searchTerm } = useContext(FilterContext);

  const sellerFiltered = sellerList.filter(seller => {
    if (searchTerm === '') {
      return seller;
    } else if (seller?.contact?.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return seller;
    }
  });

  return (
    <Ul>
      {isLoading && <CardSellerSkeleton number={12} />}
      {sellerFiltered?.map(seller => {
        return (
          <li key={seller.sellerId + uuidv4()}>
            <CardSeller seller={seller} />
          </li>
        );
      })}
    </Ul>
  );
};
