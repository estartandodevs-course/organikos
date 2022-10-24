import styled, { css } from 'styled-components';

export const Input = styled.input`
  border: 1px solid #000000;
  background: #ebf1e7;
  border-radius: 8px;
  border: 1px solid #737871;
  padding: 12px 16px 14px;
  color: #737871;
  font-weight: 300;
  font-size: ${({ theme }) => theme.typography.h4.fontSize};

  &:focus {
    background: #ebf1e7;
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  ${({ size }) => css`
    ${!!size && modifierContainer[size]()}
  `}
`;

const modifierContainer = {
  tiny: () => css`
    width: 98px;
    height: 48px;
  `,

  small: () => css`
    width: 230px;
    height: 48px;
  `,

  medium: () => css`
    width: 262px;
    height: 40px;
  `,

  big: () => css`
    width: 343px;
    height: 48px;
  `,
};
