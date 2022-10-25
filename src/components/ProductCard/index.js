import { ImageContainer, InfoProduct, Wrapper } from './styles';

export const ProductCard = ({ product }) => {
  return (
    <Wrapper>
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
  );
};
