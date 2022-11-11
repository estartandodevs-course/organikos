import React, { useState } from 'react';
import Switch from 'react-switch';
import { Container } from './styles';

export const SwitchCheck = ({ text }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  return (
    <Container className="example">
      <span>{text}</span>
      <Switch onChange={handleChange} checked={checked} />
    </Container>
  );
};
