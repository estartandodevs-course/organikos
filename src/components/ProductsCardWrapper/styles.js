import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 416px;
  height: 436px;
  overflow-y: scroll;
  background: ${({ backGroundColor }) => backGroundColor};
  border-radius: 10px;
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px 0;
`;
