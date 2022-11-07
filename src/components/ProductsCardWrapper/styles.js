import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 416px;
  height: 436px;
  background: ${({ backGroundColor }) => backGroundColor};
`;

export const Wrapper = styled.section`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px 27px;
  margin: 10px 20px 85px 20px;
`;
