import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 174px;
  width: 170px;
  padding: 8px;
  background-color: ${({ theme }) => theme.palettes.primaryGreen.v6};
  border-radius: 8px;
`;

export const WrapperSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  width: 208px;
  height: 174px;
  padding: 8px;
  background-color: ${({ theme }) => theme.palettes.primaryGreen.v5};
  border-radius: 8px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 82px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.palettes.neutral.v4};
  border-radius: 8px;

  & > img:nth-child(2n + 1) {
    width: ${({ size }) => size || '32px'};
  }
  & > img:nth-child(n + 1) {
    width: ${({ sizeProduct }) => sizeProduct || '66px'};
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
