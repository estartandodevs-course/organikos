import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  background-color: ${({ theme }) => theme.palettes.primaryGreen.v6};
  box-shadow: ${({ theme }) => theme.palettes.shadow};

  & > div {
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    gap: 8px;
  }

  & > img {
    padding: 15px 12px;
  }
`;
