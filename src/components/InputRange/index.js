import { Container, Wrapper } from './styles';

export const InputRange = ({ onChange, value }) => {
  return (
    <Container>
      <Wrapper>
        <div>
          <p>Distância máxima</p>
          <span>{value} Km</span>
        </div>
        <input type="range" min="1" max="12" onChange={onChange} value={value} />
      </Wrapper>
    </Container>
  );
};
