import { Logo } from '../../components/Logo/index';
import { InputRange } from '../../components/InputRange/index';
import { InputSearch } from '../../components/InputSearch/index';
import { Container, FilterWrapper, Wrapper } from './styles';
import { SellerList } from '../../components/SellerList';
import { Footer } from '../../components/Footer';
import { categories } from '../../mocks/categories';
import { Tags } from '../../components/Tags';
import { useContext, useEffect, useState } from 'react';
import { FilterContext } from '../../contexts/FilterContext';

export const Home = () => {
  const initialRange = 0;
  const [rangeValue, setRangeValue] = useState(initialRange);
  const { resetSearchTerm } = useContext(FilterContext);

  const handleChange = e => {
    setRangeValue(e.target.value);
  };

  useEffect(() => {
    resetSearchTerm();
  }, []);

  return (
    <Container>
      <Logo icon="bag" to="/historic" />
      <InputRange value={rangeValue} onChange={handleChange} />
      <FilterWrapper>
        <Tags categorys={categories} touchable={true} />
      </FilterWrapper>
      <InputSearch />
      <Wrapper>
        <SellerList />
      </Wrapper>
      <Footer>Organikos</Footer>
    </Container>
  );
};
