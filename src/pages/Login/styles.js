import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 1440px) {
    display: flex;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  & > img {
    width: 210px;
    margin-top: 100px;
  }

  & > footer {
    height: 52px;
  }

  & > h1 {
    display: none;
    margin-top: 200px;
  }

  @media (min-width: 1440px) {
    width: 50%;

    & > img {
      display: none;
    }

    & > h1 {
      display: block;
    }
  }
`;

export const ContainerLeft = styled.div`
  display: none;
  width: 50%;
  height: 100%;
  padding: 82px;
  background-color: ${({ theme }) => theme.palettes.black};

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 30px;
  margin: 0 auto 100px;
`;
