import { OrderCard } from '../OrderCard';
import { Container } from './styles';
import { v4 as uuidv4 } from 'uuid';

export const OrderCardList = ({ historyList }) => {
  return (
    <Container>
      {historyList.map(history => (
        <li key={history?.orderNumber + uuidv4()}>
          <OrderCard history={history} />
        </li>
      ))}
    </Container>
  );
};
