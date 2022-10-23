import { Container, ImageContainer, InfoProduct, Wrapper } from './styles';

export const ProductCard = () => {
  const products = [
    ['/assets/images/images-products/banana.png', 'Banana', '100g', 'R$00,00'],
    ['/assets/images/images-products/carrot.png', 'Carrot', '100g', 'R$00,00'],
    ['/assets/images/images-products/chili.png', 'Chili', '100g', 'R$00,00'],
    ['/assets/images/images-products/eggplant.png', 'Eggplant', '100g', 'R$00,00'],
    ['/assets/images/images-products/eggs.png', 'Eggs', '100g', 'R$00,00'],
    ['/assets/images/images-products/onion.png', 'Onion', '100g', 'R$00,00'],
    ['/assets/images/images-products/potato.png', 'Potato', '100g', 'R$00,00'],
    ['/assets/images/images-products/tomato.png', 'Tomato', '100g', 'R$00,00'],
  ];

  return (
    <Container>
      {products.map(product => (
        <Wrapper key={product[1]}>
          <ImageContainer>
            <img src="/assets/icons/icons-amount/fewer.svg" alt="icon menos" />
            <img src={product[0]} alt={`Imagem ${product[1]}`} />
            <img src="/assets/icons/icons-amount/plus.svg" alt="icon menos" />
          </ImageContainer>
          <InfoProduct>
            <p>{product[1]}</p>
            <p>{product[2]}</p>
            <span>{product[3]}</span>
          </InfoProduct>
        </Wrapper>
      ))}
    </Container>
  );
};
