import { CardWrapper } from './styles';
import { StatusOrder } from '../../mocks/statusOrder';

export const OrderCard = ({ history }) => {
  return (
    <CardWrapper>
      <div>
        <h2>Pedido {history.orderNumber}</h2>
        <p>{StatusOrder[history.status][1]}</p>
        <span>{history.price}</span>
      </div>
      <img src={StatusOrder[history.status][0]} alt="Imagem status do pedido" />
    </CardWrapper>
  );
};
