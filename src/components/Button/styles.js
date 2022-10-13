import styled, { css } from 'styled-components';

const modifierButton = {
  primary: () => css`
    background-color: ${({ theme }) => theme.palettes.secondaryPurple.main};
    color: ${({ theme }) => theme.palettes.secondaryStraw.v6};

    &:hover {
      background-color: ${({ theme }) => theme.palettes.secondaryPurple.v6};
    }
  `,

  secondary: () => css`
    background-color: ${({ theme }) => theme.palettes.neutral.v2};
    color: ${({ theme }) => theme.palettes.black};

    &:hover {
      background-color: ${({ theme }) => theme.palettes.neutral.v2};
    }
  `,
};

export const ButtonStyled = styled.button`
  width: 179px;
  height: 36px;
  border: none;
  box-shadow: ${({ theme }) => theme.palettes.shadow};
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.1s ease-in-out;

  ${({ typeButton }) => css`
    ${!!typeButton && modifierButton[typeButton]()}
  `}
`;
