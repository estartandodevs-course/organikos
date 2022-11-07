import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 8px;
  width: 330px;
  height: 150px;
  background-color: ${({ theme }) => theme.palettes.primaryGreen.v6};
  box-shadow: ${({ theme }) => theme.palettes.shadow};
  border-radius: 8px;
`;

export const WrapperSkeleton = styled.div`
  display: flex;
  padding: 8px;
  width: 330px;
  height: 150px;
  border-radius: 8px;
  gap: 5px;
  box-shadow: ${({ theme }) => theme.palettes.shadow};
  background-color: ${({ theme }) => theme.palettes.primaryGreen.v5};
`;

export const SellerAvatar = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span {
    font-size: ${({ theme }) => theme.typography.h4.fontSize};
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  }
`;

export const MarketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MarketInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & > div {
    padding: 4px 8px;
    font-size: ${({ theme }) => theme.typography.h4.fontSize};
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  }

  & > img {
    align-self: start;
    padding: 16px;
    cursor: pointer;
  }
`;

export const CategoriesWrapper = styled.ul`
  display: flex;
  margin-top: auto;

  & > ul {
    flex-wrap: wrap;
  }
`;
