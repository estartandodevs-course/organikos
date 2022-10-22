import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 29px;
  background-color: ${({ theme }) => theme.palettes.primaryGreen.main};
  color: ${({ theme }) => theme.palettes.white};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};

  @media (max-width: 768px) {
    padding: 16px;
  }
`;
