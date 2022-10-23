import styled from 'styled-components';

export const Container = styled.div`
  background: #ebf1e7;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-top: 48px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const NameSeller = styled.p`
  color: ${({ theme }) => theme.palettes.secondaryStraw.v1};
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  line-height: 24px;
`;

export const InfoSeller = styled.p`
  color: #1d1d1e;
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: 400;
  line-height: 12px;
`;

export const Km = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #030405;
  line-height: 16px;
`;

export const Crate = styled.div`
  display: flex;
  justify-content: center;
  padding: 18px 0;
  gap: 240px;
`;
