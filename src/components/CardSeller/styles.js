import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 8px;
  max-width: 330px;
  height: auto;
  background-color: ${({ theme }) => theme.palettes.primaryGreen.v6};
  box-shadow: ${({ theme }) => theme.palettes.shadow};
  border-radius: 8px;
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
  gap: 12px;
`;

export const MarketInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    padding: 4px 8px;
    font-size: ${({ theme }) => theme.typography.h4.fontSize};
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  }

  & > img {
    padding: 16px;
    cursor: pointer;
  }
`;

export const CategoriesWrapper = styled.ul`
  display: flex;

  & > ul {
    flex-wrap: wrap;
  }
`;
