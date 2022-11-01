import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 16px;

  p {
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
  }

  span {
    color: ${({ theme }) => theme.palettes.secondaryStraw.main};
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
    margin-left: 7px;
  }

  h3 {
    font-weight: 500;
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
  }

  li {
    color: ${({ theme }) => theme.palettes.secondaryStraw.main};
    display: block;
  }

  @media (max-width: 768px) {
    p {
      font-size: ${({ theme }) => theme.typography.h4.fontSize};

      span {
        font-size: ${({ theme }) => theme.typography.h4.fontSize};
      }
    }
  }
`;
