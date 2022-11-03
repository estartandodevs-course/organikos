import { ImageContainer, InfoProduct, Touchable, Wrapper } from './styles';

export const ProductCard = ({ product, size, onPlus, onMinus }) => {
  return (
    <Wrapper>
      <ImageContainer size={size}>
        <Touchable onClick={onMinus}>
          <img src="/assets/icons/icons-amount/fewer.svg" alt="icon menos" />
        </Touchable>
        <img src={product[0]} alt={`Imagem ${product[1]}`} />
        <Touchable onClick={onPlus}>
          <img src="/assets/icons/icons-amount/plus.svg" alt="icon mais" />
        </Touchable>
      </ImageContainer>
      <InfoProduct>
        <p>{product[1]}</p>
        <p>{product[2]}</p>
        <span>{product[3]}</span>
      </InfoProduct>
    </Wrapper>
  );
};
