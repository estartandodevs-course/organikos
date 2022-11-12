import { ModalContextProvider } from './contexts/ModalContext';
import { OrderContextProvider } from './contexts/OrderContext';
import { SellersContextProvider } from './contexts/SellersContext';
import { Routers } from './routes/index';

function App() {
  return (
    <OrderContextProvider>
      <ModalContextProvider>
        <SellersContextProvider>
          <Routers />
        </SellersContextProvider>
      </ModalContextProvider>
    </OrderContextProvider>
  );
}

export default App;
