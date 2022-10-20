import styled from 'styled-components';

export const Tag = styled.p`
  color: ${({ theme }) => theme.palettes.white};
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
`;

export const Wrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 8px;
  border-radius: 16px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Container = styled.ul`
  display: flex;
  gap: 4px;
`;
