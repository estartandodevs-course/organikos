import { OrderCard } from '../OrderCard';
import { Container } from './styles';

export const OrderCardList = () => {
  const historyList = [
    {
      orderNumber: 1,
      status: 'done',
      price: 'R$150,00',
      date: '12/10/2022',
      hour: '16:35',
    },
    {
      orderNumber: 2,
      status: 'processing',
      price: 'R$87,00',
      date: '19/10/2022',
      hour: '14:47',
    },
  ];

  return (
    <Container>
      {historyList.map(history => (
        <li key={history?.orderNumber}>
          <OrderCard history={history} />
        </li>
      ))}
    </Container>
  );
};
