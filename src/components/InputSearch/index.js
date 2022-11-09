import { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';
import { Container, Wrapper, Input } from './styles';

export const InputSearch = () => {
  const { searchTerm, setSearchTerm } = useContext(FilterContext);

  return (
    <Container>
      <Wrapper>
        <img src="../assets/icons/search.svg" alt="lupa" />
        <Input type="text" placeholder="Pesquisar" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      </Wrapper>
    </Container>
  );
};
