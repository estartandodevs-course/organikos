import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 16px;
  width: 100%;
  height: 52px;
  background: ${({ theme }) => theme.palettes.primaryGreen.v6};

  p {
    font-size: ${({ theme }) => theme.typography.h1.fontSize};
    color: #1d1d1e;
    font-weight: 500;
  }

  img {
    display: none;
  }

  @media (max-width: 768px) {
    height: 48px;
    p {
      font-size: ${({ theme }) => theme.typography.h4.fontSize};
    }

    img {
      display: ${({ icon }) => icon};
    }
  }
`;
