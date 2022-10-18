import { Container, Wrapper, Input } from './styles';

export const InputSearch = () => {
  return (
    <Container>
      <Wrapper>
        <img src="./assets/icons/search.svg" alt="lupa" />
        <Input type="text" placeholder="Pesquisar" />
      </Wrapper>
    </Container>
  );
};
