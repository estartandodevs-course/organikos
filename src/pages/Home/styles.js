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

  & > ul > li {
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
