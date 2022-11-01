import { infoOrder } from '../../mocks/infoOrder';
import { Wrapper } from './styles';

export const Infos = () => {
  return (
    <Wrapper>
      <p>
        Fale com o produtor:
        <span>{infoOrder[0][0]}</span>
      </p>
      <p>
        Forma de entrega:
        <span>{infoOrder[0][1]}</span>
      </p>
      <p>
        Forma de pagamento:
        <span>{infoOrder[0][2]}</span>
      </p>
      <ul>
        <p>Detalhes da compra:</p>
        {infoOrder[0][3].map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3>
        Total da compra:
        <span>R${infoOrder[0][4]}</span>
      </h3>
    </Wrapper>
  );
};
