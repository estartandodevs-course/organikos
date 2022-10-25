import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  margin-top: 16px;
  gap: 16px;

  span {
    color: ${({ theme }) => theme.palettes.secondaryStraw.main};
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
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 180px;
  gap: 16px;
  margin: 24px auto 60px auto;
`;

export const Crate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 40px 0 0;
  gap: 47px;
`;
