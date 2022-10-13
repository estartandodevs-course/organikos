import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 179px;
  height: 36px;
  width: 100%;
  height: 100%;
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #d4e39c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${({ backgroundColorHover }) => backgroundColorHover};
  }
`;
