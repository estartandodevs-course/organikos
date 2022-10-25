import { OrderCard } from '../OrderCard';
import { Container } from './styles';
import { historyList } from '../../mocks/historyList';
import { v4 as uuidv4 } from 'uuid';

export const OrderCardList = () => {
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
