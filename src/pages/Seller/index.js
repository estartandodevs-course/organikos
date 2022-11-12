import { InputSearch } from '../../components/InputSearch';
import { ProfileSeller } from '../../components/ProfileSeller';
import { Checklist } from '../../components/Checklist';
import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getSeller } from '../../services/sellerService';
import { InputForm } from '../../components/InputForm';
import { Bin, Box, Bunker, Case, Container, Crate, FilterWrapper, Garner, Kit, Left, Right, Safe } from './styles';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { useTheme } from 'styled-components';
import { ProductCardList } from '../../components/ProductCardList';
import { Modal } from '../../components/Modal';
import { CartContext } from '../../contexts/CartContext';
import { Tags } from '../../components/Tags';
import { categories } from '../../mocks/categories';
import { ProductsCardWrapper } from '../../components/ProductsCardWrapper';
import { Logo } from '../../components/Logo';
import { Title } from '../../components/Title';
import { Bag } from '../../components/Bag';
import { InfoSeller } from '../../components/InfoSeller';
import { MainWrapper } from '../../templates/MainWrapper';
import { LogoAnimation } from '../../components/LogoAnimation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Seller = () => {
  const [seller, setSeller] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  const theme = useTheme();
  const { removeAllProductsBySeller, cartTotal } = useContext(CartContext);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await getSeller(id);
        setSeller(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  if (isError) {
    return <div>Ooops! Algo de errado aconteceu!</div>;
  }

  if (isLoading) {
    return (
      <MainWrapper>
        <LogoAnimation />
      </MainWrapper>
    );
  }

  return (
    <Container>
      <Kit>
        <Logo icon="bag" />
      </Kit>
      <Case>
        <ProfileSeller to="/home" />
      </Case>
      <InputSearch />
      <Crate>
        <Left>
          <InfoSeller to="/home" />
          <ProductsCardWrapper backGroundColor={theme.palettes.primaryGreen.v5} id={id} />
        </Left>
        <Right>
          <FilterWrapper>
            <Tags categorys={categories} touchable={true} />
          </FilterWrapper>
          <ProductCardList />
          <Bin>
            <Title text={`Total da compra - R$${cartTotal.toFixed(2)}`} />
            <Bag userId={id} />
            <Title text="Formas de Entrega" />
          </Bin>
          <h5>Formas de Entrega</h5>
          <Garner>
            <Checklist optionsList={seller?.distribution} name="distribution" />
          </Garner>
          <Bin>
            <Title text="Formas de Pagamento" />
          </Bin>
          <h5>Formas de Pagamento</h5>
          <Garner>
            <Checklist optionsList={seller?.payment} name="payment" />
          </Garner>
          <Safe>
            <InputForm size="medium" type="text" text="Insira aqui seu cupom de desconto" />
            <Bunker>
              <h4>{`Total da compra - R$${cartTotal.toFixed(2)}`}</h4>
              <Box>
                <Link to={`/seller/${id}/checkout`}>
                  <Button backgroundColor={theme.palettes.secondaryPurple.main}> Comprar </Button>
                </Link>
                <Link to="/home">
                  <Button
                    onClick={() => removeAllProductsBySeller(seller)}
                    backgroundColor={theme.palettes.neutral.v2}
                    color={theme.palettes.black}
                  >
                    Cancelar
                  </Button>
                </Link>
              </Box>
            </Bunker>
          </Safe>
        </Right>
      </Crate>
      <Footer> Organikos </Footer>
      <Modal name={seller?.contact?.name}>{seller?.contact?.desc}</Modal>
      <ToastContainer
        toastStyle={{ backgroundColor: theme.palettes.secondaryPurple.v3, color: 'white' }}
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Container>
  );
};

Seller.displayName = 'Seller';
