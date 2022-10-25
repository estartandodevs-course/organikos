import { SellersContextProvider } from './contexts/SellersContext';
import { Routers } from './routes/index';

function App() {
  return (
    <SellersContextProvider>
      <Routers />
    </SellersContextProvider>
  );
}

export default App;
