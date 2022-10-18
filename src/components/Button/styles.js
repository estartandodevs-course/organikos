import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 179px;
  height: 36px;
  border: none;
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.palettes.primaryGreen.main};
  color: ${({ theme }) => theme.palettes.secondaryStraw.v6};
  box-shadow: ${({ theme }) => theme.palettes.shadow};
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${({ backgroundColorHover, theme }) => backgroundColorHover || theme.palettes.primaryGreen.main};
  }
`;
