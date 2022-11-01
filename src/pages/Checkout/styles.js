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

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 179px;
  gap: 16px;
  margin: 50px auto 60px auto;
`;
