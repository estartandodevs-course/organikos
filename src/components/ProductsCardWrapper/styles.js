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
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;
`;
