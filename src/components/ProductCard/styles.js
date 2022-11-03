import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 208px;
  padding: 8px;
  background-color: ${({ theme }) => theme.palettes.primaryGreen.v6};
  border-radius: 8px;
`;

export const WrapperSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  width: 208px;
  padding: 8px;
  background-color: ${({ theme }) => theme.palettes.primaryGreen.v5};
  border-radius: 8px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.palettes.neutral.v4};
  border-radius: 8px;
  gap: 8px;

  & > img:nth-child(2n + 1) {
    width: ${({ size }) => size || '32px'};
  }
`;

export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
  }

  & > span {
    margin-top: 8px;
  }
`;

export const Touchable = styled.div`
  cursor: pointer;
`;
