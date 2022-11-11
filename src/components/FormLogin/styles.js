import styled from 'styled-components';

export const InputControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    width: 100%;
    align-items: center;
    border-bottom: 2px solid #737871;
    padding: 0 16px;
    border: 2px solid ${({ isValid }) => (isValid ? '#F60F0F' : 'none')};
    border-radius: 4px;

    & > input {
      width: 100%;
      border: none;
      outline: none;
      padding: 23px;
      font-size: ${({ theme }) => theme.typography.h4.fontSize};
    }
  }

  & > span {
    color: red;
  }
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 100%;
  padding: 38px;
  margin-top: 100px;

  & > span {
    color: red;
    text-align: center;
  }

  @media (min-width: 1440px) {
    width: 80%;
  }
`;
