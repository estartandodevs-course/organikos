import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 48px;
  justify-content: center;
  max-width: 1100px;
  margin: 115px auto;
  min-height: 60vh;

  & > li {
    max-width: 314px;
    width: 100%;
    height: 104px;
  }

  @media (max-width: 768px) {
    gap: 16px;
    margin: 16px 0 54px;
  }
`;
