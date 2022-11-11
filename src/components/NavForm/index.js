import { Container } from './styles';
import { Link, useLocation } from 'react-router-dom';

const links = [
  {
    name: 'Dados pessoais',
    path: '/dadospessoais',
  },
  {
    name: 'Endereços',
    path: '/enderecos',
  },
  {
    name: 'Pagamentos',
    path: '/pagamentos',
  },
];

export const NavForm = () => {
  const location = useLocation();

  return (
    <Container>
      {links.map(link => (
        <Link to={link.path} className={location.pathname.includes(link.path) ? 'active' : ''} key={link.name}>
          {link.name}
        </Link>
      ))}
    </Container>
  );
};
