import styled from 'styled-components';

export const Container = styled.div``;

export const Case = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  gap: 16px;

  h3 {
    display: none;
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
    font-weight: 400;
  }

  @media (max-width: 1442px) {
    h3 {
      display: block;
    }
  }
`;

export const Crate = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 145px 0;
  gap: 100px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 16px 0 0 0;
  }
`;

export const Cashier = styled.div`
  width: 320px;
  height: 104px;
`;

export const Box = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 95px 0;
  text-align: center;
  gap: 8px;

  h3 {
    font-weight: 500;
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
    color: ${({ theme }) => theme.palettes.secondaryPurple.main};
  }

  p {
    display: none;
    margin-top: 48px;
    font-size: ${({ theme }) => theme.typography.h4.fontSize};
    color: ${({ theme }) => theme.palettes.secondaryPurple.v3};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    p {
      display: block;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 16px;

  p {
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
  }

  span {
    color: ${({ theme }) => theme.palettes.secondaryStraw.main};
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
    margin-left: 7px;
  }

  h3 {
    font-weight: 500;
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
  }

  li {
    color: ${({ theme }) => theme.palettes.secondaryStraw.main};
    display: inline;
  }

  @media (max-width: 768px) {
    p {
      font-size: ${({ theme }) => theme.typography.h4.fontSize};

      span {
        font-size: ${({ theme }) => theme.typography.h4.fontSize};
      }
    }
  }

  @media (max-width: 1442px) {
    display: none;
  }
`;
