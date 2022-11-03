import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  & > footer {
    height: fit-content;
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin: 10px 0px 85px;
`;

export const Box = styled.div`
  width: 240px;
  margin: 0 auto;
  margin-bottom: 55px;
`;
