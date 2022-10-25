import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 16px;
  background-color: ${({ theme }) => theme.palettes.secondaryPurple.main};
  box-shadow: ${({ theme }) => theme.palettes.shadow};
  color: ${({ theme }) => theme.palettes.secondaryStraw.v6};

  & > img {
    width: 16px;
  }
`;
