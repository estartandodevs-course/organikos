import { BagPage, Checkout, Details, Feedback, Historic, Home, Seller } from '../pages';

export const routers = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/seller/:id',
    element: <Seller />,
  },
  {
    path: '/bag',
    element: <BagPage />,
  },
  {
    path: '/checkout/:id',
    element: <Checkout />,
  },
  {
    path: '/details/:id',
    element: <Details />,
  },
  {
    path: '/feedback',
    element: <Feedback />,
  },
  {
    path: '/historic',
    element: <Historic />,
  },
];
