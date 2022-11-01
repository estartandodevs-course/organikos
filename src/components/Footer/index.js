import { getFullYear } from '../../utils/getFullYear';
import { FooterWrapper } from './styles';

export const Footer = ({ children }) => {
  const year = getFullYear();

  return <FooterWrapper>{children + ' ' + year}</FooterWrapper>;
};
