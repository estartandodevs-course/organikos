import { FooterWrapper } from './styles';

export const Footer = ({ children }) => {
  const year = new Date().getFullYear();

  return <FooterWrapper>{children + ' ' + year}</FooterWrapper>;
};
