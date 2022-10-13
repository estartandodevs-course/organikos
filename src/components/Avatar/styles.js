import styled, { css } from 'styled-components';

const modifierContainer = {
  small: () => css`
    width: 53.31px;
    height: 53.31px;

    img {
      width: 20px;
      height: 30px;
    }
  `,

  big: () => css`
    width: 76px;
    height: 76px;

    img {
      width: 32px;
      height: 32px;
    }
  `,
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 100%;

  ${({ size }) => css`
    ${!!size && modifierContainer[size]()}
  `}
`;
