import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(1px);
`;

export const Box = styled.section`
  max-width: 600px;
  width: 100%;
  background-color: ${({ theme }) => theme.palettes.secondaryStraw.v6};
  margin: 20px 20px 0;
  padding: 25px 16px;
  border-radius: 8px;
  text-align: left;

  & > header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.palettes.secondaryStraw.main};
    & > h2 {
      color: ${({ theme }) => theme.palettes.secondaryStraw.main};
      font-size: ${({ theme }) => theme.typography.h2.fontSize};
    }

    & > img {
      width: 30px;
    }
  }

  & > p {
    margin: 20px 0;
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
  }
`;
