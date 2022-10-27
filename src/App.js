import { ModalContextProvider } from './contexts/ModalContext';
import { SellersContextProvider } from './contexts/SellersContext';
import { Routers } from './routes/index';

function App() {
  return (
    <ModalContextProvider>
      <SellersContextProvider>
        <Routers />
      </SellersContextProvider>
    </ModalContextProvider>
  );
}

export default App;
