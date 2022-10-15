import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palettes.primaryGreen.main};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 47%;
  height: 48px;
  background: ${({ theme }) => theme.palettes.secondaryStraw.v6};
  border: 1px solid #737871;
  border-radius: 5px;

  img {
    width: 24px;
    height: 24px;
    margin-left: 10px;
    position: absolute;
    z-index: 10;
    border: none;
    background: transparent;
    outline: none;
  }

  @media (max-width: 768px) {
    background-color: #ebf1e7;
    width: 80%;
    height: 50%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: #ebf1e7;
  font-size: 14px;
  color: #737871;
  border: 1px solid #737871;
  border-radius: 5px;
  padding: 0 40px;
  &:focus {
    background-color: ${({ theme }) => theme.palettes.secondaryStraw.v6};
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
