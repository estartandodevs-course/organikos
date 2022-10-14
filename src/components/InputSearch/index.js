import { Container, Wrapper, Input } from './styles';

export const InputSearch = () => {
  return (
    <Container>
      <Wrapper>
        {/* <img src={} alt="lupa" />  */}
        <Input type="text" placeholder="Pesquisar" />
      </Wrapper>
    </Container>
  );
};
