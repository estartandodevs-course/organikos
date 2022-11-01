import { Route, Routes } from 'react-router-dom';
import { routers } from './routers';

export const Routers = () => {
  return (
    <Routes>
      {routers.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );
};
