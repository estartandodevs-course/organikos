import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px 48px;
  margin: 115px 0;

  & > li {
    width: 314px;
  }

  @media (max-width: 768px) {
    gap: 16px;
    margin: 16px 0 54px;
  }
`;
