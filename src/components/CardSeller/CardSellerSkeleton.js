import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { CategoriesWrapper, MarketInfos, MarketWrapper, SellerAvatar, WrapperSkeleton } from './styles';

export const CardSellerSkeleton = ({ number = 12 }) => {
  return Array(number)
    .fill(0)
    .map((_, i) => (
      <WrapperSkeleton key={i}>
        <SellerAvatar>
          <Skeleton circle width={53.31} height={53.31} />
          <Skeleton width={40} />
        </SellerAvatar>
        <MarketWrapper>
          <MarketInfos>
            <div>
              <Skeleton width={100} />
              <Skeleton width={170} height={20} />
            </div>
            <Skeleton style={{ marginRight: '10px' }} width={25} height={25} />
          </MarketInfos>
          <CategoriesWrapper style={{ marginTop: '15px' }}>
            <Skeleton width={210} height={20} count={2} />
          </CategoriesWrapper>
        </MarketWrapper>
      </WrapperSkeleton>
    ));
};
