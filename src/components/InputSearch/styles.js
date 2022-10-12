import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #558b2f;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 47%;
  height: 48px;
  background: #d4e39c;
  gap: 12px;
  border: 1px solid #737871;
  border-radius: 5px;

  @media (max-width: 768px) {
    background-color: #ebf1e7;
    width: 80%;
    height: 50%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: #d4e39c;
  font-size: 14px;
  color: #737871;
  border: 1px solid #737871;
  border-radius: 5px;
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  @media (max-width: 768px) {
    background-color: #ebf1e7;
  }
`;
