import { CardWrapper } from './styles';
import { StatusOrder } from '../../mocks/statusOrder';
import { Link } from 'react-router-dom';

export const OrderCard = ({ history }) => {
  return (
    <CardWrapper>
      <Link to={`/historic/${history.orderNumber}`}>
        <div>
          <h2>Pedido {history.orderNumber}</h2>
          <p>{StatusOrder[history.status][1]}</p>
          <span>{history.price}</span>
        </div>
      </Link>
      <img src={StatusOrder[history.status][0]} alt="Imagem status do pedido" />
    </CardWrapper>
  );
};
