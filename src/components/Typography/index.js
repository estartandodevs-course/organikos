import { Typographies } from './styles';

export const Typography = ({ children, varient, color }) => {
  const Element = Typographies[varient];

  return <Element color={color}>{children}</Element>;
};
