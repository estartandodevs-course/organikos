import { useState } from 'react';
import { Container, Wrapper } from './styles';

export const InputRange = () => {
  const [rangeValue, setRangeValue] = useState(2);

  return (
    <Container>
      <Wrapper>
        <div>
          <p>Distância máxima</p>
          <span>{rangeValue} Km</span>
        </div>
        <input type="range" min="1" max="12" onChange={e => setRangeValue(e.target.value)} value={rangeValue} />
      </Wrapper>
    </Container>
  );
};
