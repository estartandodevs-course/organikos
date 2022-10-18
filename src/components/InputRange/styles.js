import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.palettes.primaryGreen.v5};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  font-size: ${({ theme }) => theme.palettes.black};

  & > div {
    max-width: 330px;
    width: 100%;
    margin: 0 16px;
  }

  @media (max-width: 768px) {
    background-color: transparent;
    font-size: ${({ theme }) => theme.typography.h4.fontSize};
    color: #737871;
    padding: 18px 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  & > input {
    position: relative;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: block;
    width: 100%;
    height: 3px;
    background-color: #737871;
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.palettes.black};
      cursor: pointer;
    }
  }
`;
