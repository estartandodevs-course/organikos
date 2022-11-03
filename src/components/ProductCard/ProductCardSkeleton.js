import Skeleton from 'react-loading-skeleton';
import { ImageContainer, InfoProduct, WrapperSkeleton } from './styles';

export const ProductCardSkeleton = () => {
  return Array(4)
    .fill(0)
    .map((_, i) => (
      <WrapperSkeleton key={i}>
        <ImageContainer>
          <Skeleton width={180} height={65} />
        </ImageContainer>
        <InfoProduct>
          <Skeleton count={2} width={100} />
          <Skeleton width={50} />
        </InfoProduct>
      </WrapperSkeleton>
    ));
};
