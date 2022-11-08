import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 16px;

  p {
    font-weight: 500;
    color: ${({ theme }) => theme.palettes.secondaryPurple.main};
  }

  a {
    cursor: pointer;
  }
`;
