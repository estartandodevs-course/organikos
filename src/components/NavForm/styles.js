import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 117px;
  background: ${({ theme }) => theme.palettes.primaryGreen.v6};

  a {
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
    color: ${({ theme }) => theme.palettes.black};
    font-weight: 300;
  }

  .active {
    color: ${({ theme }) => theme.palettes.secondaryPurple.main};
  }

  @media (max-width: 768px) {
    height: 48px;
    a {
      font-size: ${({ theme }) => theme.typography.h4.fontSize};
    }

    img {
      display: ${({ icon }) => icon};
    }
  }
`;
