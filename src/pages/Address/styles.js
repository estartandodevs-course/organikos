import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  justify-content: space-around;
  margin: 89px 0;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
  gap: 32px;
`;

export const Crate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;

  span {
    font-weight: 400;
    font-size: ${({ theme }) => theme.typography.h5.fontSize};
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 890px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;
