import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  gap: 16px;

  p {
    font-size: 20px;
  }
`;

export const Crate = styled.div`
  width: 320px;
  height: 104px;
`;

export const Box = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 95px auto;
  text-align: center;
  gap: 8px;

  h3 {
    font-weight: 500;
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
    color: ${({ theme }) => theme.palettes.secondaryPurple.main};
  }

  p {
    margin-top: 48px;
    font-size: ${({ theme }) => theme.typography.h4.fontSize};
    color: ${({ theme }) => theme.palettes.secondaryPurple.v3};
    cursor: pointer;
  }
`;
