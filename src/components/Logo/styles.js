import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ebf1e7;
  padding: 32px 206px 32px 60px;
  gap: 206px;

  @media (max-width: 995px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 93px 160px 23px;
    gap: 32px;
  }
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  color: ${({ theme }) => theme.palettes.secondaryStraw.main};
  word-wrap: break-word;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 97.64px;
  height: 108.39px;

  @media (max-width: 768px) {
    width: 55px;
    height: 61.05px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 180px;
`;
