import { ImageContainer, InfoProduct, Touchable, Wrapper } from './styles';

export const ProductCard = ({ product, size, onPlus, onMinus }) => {
  return (
    <Wrapper>
      <ImageContainer size={size}>
        <Touchable onClick={onMinus}>
          <img src="/assets/icons/icons-amount/fewer.svg" alt="icon menos" />
        </Touchable>
        <img src={product?.image} alt={`Imagem ${product?.name}`} />
        <Touchable onClick={onPlus}>
          <img src="/assets/icons/icons-amount/plus.svg" alt="icon mais" />
        </Touchable>
      </ImageContainer>
      <InfoProduct>
        <p>{product?.name}</p>
        <p>{product?.quantity + product?.measure}</p>
        <span>R${product?.price.toFixed(2)}</span>
      </InfoProduct>
    </Wrapper>
  );
};
