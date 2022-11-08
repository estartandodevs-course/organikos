import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  display: flex;
  gap: 16px;
  margin: 8px 16px;
  overflow-x: scroll;

  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
