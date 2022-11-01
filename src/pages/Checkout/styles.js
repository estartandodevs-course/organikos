import styled from 'styled-components';

export const Container = styled.div``;

export const Receptacle = styled.div`
  margin-bottom: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Crate = styled.div`
  display: flex;
  margin: 145px 194px;
  gap: 40%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 16px 0 0 0;
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
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 179px;
  gap: 16px;
  margin: 50px auto 60px auto;
`;
