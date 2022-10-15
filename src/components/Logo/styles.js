import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #ebf1e7;
  padding: 32px 206px 32px 33px;
  gap: 206px;

  img {
    width: 97.64px;
    height: 108.39px;
  }

  p {
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
    color: ${({ theme }) => theme.palettes.secondaryStraw.main};
    word-wrap: break-word;
  }

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    padding: 93px 160px 23px;

    img {
      width: 55px;
      height: 61.05px;
    }

    p {
      display: none;
    }
  }
`;
