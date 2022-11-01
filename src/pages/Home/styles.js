import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  margin-bottom: 77px;
`;

export const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 32px;

  & > ul {
    display: flex;
    gap: 72px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
