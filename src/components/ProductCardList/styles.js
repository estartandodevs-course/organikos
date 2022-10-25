import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 16px;
  margin: 8px 16px;
  overflow-x: scroll;
  width: 100%;

  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
