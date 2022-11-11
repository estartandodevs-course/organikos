import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100px;
  gap: 8px;

  span {
    font-weight: 400;
    font-size: ${({ theme }) => theme.typography.h5.fontSize};
  }
`;
