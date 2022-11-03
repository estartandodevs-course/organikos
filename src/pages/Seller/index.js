import { InputSearch } from '../../components/InputSearch';
import { Title } from '../../components/Title/index';
import { ProfileSeller } from '../../components/ProfileSeller';
import { Bag } from '../../components/Bag';
import { Checklist } from '../../components/Checklist';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSeller } from '../../services/sellerService';
import { InputForm } from '../../components/InputForm';
import { Box, Container, Wrapper } from './styles';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { useTheme } from 'styled-components';
import { ProductCardList } from '../../components/ProductCardList';
import { Modal } from '../../components/Modal';

export const Seller = () => {
  const [seller, setSeller] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  const theme = useTheme();

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
    return <></>;
  }

  return (
    <Container>
      <ProfileSeller to="/" />
      <InputSearch />
      <ProductCardList />
      <Title text="Total da compra - R$102,50" />
      <Bag />
      <Title text="Formas de Entrega" />
      <Checklist optionsList={seller.distribution} name="entrega" />
      <Title text="Formas de Pagamento" />
      <Checklist optionsList={seller.payment} name="pagamento" />
      <Wrapper>
        <InputForm size="medium" type="text" text="Insira aqui seu cupom de desconto" />
      </Wrapper>
      <Box>
        <Link to={`/checkout/${id}`}>
          <Button backgroundColor={theme.palettes.secondaryPurple.main}> Comprar </Button>
        </Link>
        <Link to="/">
          <Button backgroundColor={theme.palettes.neutral.v2} color={theme.palettes.black}>
            Cancelar
          </Button>
        </Link>
      </Box>
      <Footer> Organikos </Footer>
      <Modal name={seller.contact.name}>{seller.contact.desc}</Modal>
    </Container>
  );
};
