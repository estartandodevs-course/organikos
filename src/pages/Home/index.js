import { Logo } from '../../components/Logo/index';
import { InputRange } from '../../components/InputRange/index';
import { InputSearch } from '../../components/InputSearch/index';
import { Container, FilterWrapper, Wrapper } from './styles';
import { SellerList } from '../../components/SellerList';
import { Footer } from '../../components/Footer';
import { categories } from '../../mocks/categories';
import { Tags } from '../../components/Tags';

export const Home = () => {
  return (
    <Container>
      <Logo icon="bag" to="/bag" />
      <InputRange initialRange={2} />
      <FilterWrapper>
        <Tags categorys={categories} />
      </FilterWrapper>
      <InputSearch />
      <Wrapper>
        <SellerList />
      </Wrapper>
      <Footer>Organikos</Footer>
    </Container>
  );
};
