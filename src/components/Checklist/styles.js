import styled from 'styled-components';

export const ChecklistWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 8px;
  }

  & > label {
    cursor: pointer;

    & > input {
      display: none;
    }
    & > input:checked ~ span {
      background-color: ${({ theme }) => theme.palettes.primaryGreen.v3};
    }

    & > span {
      max-width: 150px;
      position: relative;
      display: inline-block;
      padding: 8px 16px;
      border-radius: 16px;
      user-select: none;
      background-color: ${({ theme }) => theme.palettes.neutral.v2};
      font-size: ${({ theme }) => theme.typography.h4.fontSize};
      font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    }
  }
`;
