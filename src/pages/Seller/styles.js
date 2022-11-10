import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Case = styled.div`
  display: none;

  @media (max-width: 890px) {
    display: block;
  }
`;

export const Bin = styled.div`
  display: none;

  @media (max-width: 890px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Kit = styled.div`
  @media (max-width: 890px) {
    display: none;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 890px) {
    flex-direction: column;
  }
`;

export const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 32px;

  & > ul {
    display: flex;
    gap: 40px;
  }

  & > ul > li {
    cursor: pointer;
    transition: all 0.2s ease-out;
    :hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Right = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h5 {
    font-weight: 400;
    font-size: ${({ theme }) => theme.typography.h3.fontSize};

    @media (max-width: 890px) {
      display: none;
    }
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palettes.secondaryPurple.v6};
  }

  *::-webkit-scrollbar {
    width: 16px;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const Crate = styled.div`
  display: flex;
  margin: 50px;
  gap: 50px;
  margin-top: 50px;

  @media (max-width: 890px) {
    margin: 16px 0 88px 0;
  }
`;

export const Safe = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: flex-end;
  gap: 146px;

  @media (max-width: 890px) {
    width: 262px;
    flex-direction: column;
    align-items: center;
    margin: 40px auto 0 auto;
    gap: 32px;
  }
`;

export const Bunker = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;

  h4 {
    font-weight: 500;
    font-size: 32px;

    @media (max-width: 890px) {
      display: none;
    }
  }
`;

export const Garner = styled.div`
  @media (max-width: 890px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
