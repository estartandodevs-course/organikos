import { CardWrapper } from './styles';

export const OrderCard = ({ history }) => {
  const mockOrderStatus = {
    processing: ['assets/icons/icons-requests/hourglass.svg', 'Processando'],
    done: ['assets/icons/icons-requests/confirmation-requests.svg', 'Aprovado'],
    cancelled: ['assets/icons/icons-requests/deny.svg', 'Recusado'],
  };

  return (
    <CardWrapper>
      <div>
        <h2>Pedido {history.orderNumber}</h2>
        <p>{mockOrderStatus[history.status][1]}</p>
        <span>{history.price}</span>
      </div>
      <img src={mockOrderStatus[history.status][0]} alt="Imagem status do pedido" />
    </CardWrapper>
  );
};
