import styled, { css } from 'styled-components';
const modifierImage = {
  small: () => css`
    width: 96px;

    & > ul > img {
      width: 16px;
      height: 16px;
    }
  `,
  big: () => css`
    width: 206px;

    & > ul > img {
      width: 32px;
      height: 32px;
    }
  `,
};

export const StarContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  word-wrap: break-word;

  & > ul {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 4px;
  }

  & > h2 {
    color: ${({ theme }) => theme.palettes.secondaryPurple.main};
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
  }

  ${({ size }) => css`
    ${!!size && modifierImage[size]()}
  `}
`;
