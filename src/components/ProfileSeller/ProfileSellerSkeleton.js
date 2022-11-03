import Skeleton from 'react-loading-skeleton';
import { useTheme } from 'styled-components';
import { Box, Crate, Wrapper } from './styles';

export const ProfileSellerSkeleton = () => {
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.palettes.primaryGreen.v5 }}>
      <Wrapper>
        <Skeleton circle width={76} height={76} />
        <Box>
          <Skeleton width={200} />
          <Skeleton width={200} />
          <Skeleton width={50} />
        </Box>
      </Wrapper>
      <Crate>
        <Skeleton height={30} width={30} />
        <Skeleton height={30} width={30} />
      </Crate>
    </div>
  );
};
