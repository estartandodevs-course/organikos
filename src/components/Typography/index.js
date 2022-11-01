import { Typographies } from './styles';

export const Typography = ({ children, variant, color }) => {
  const Element = Typographies[variant];

  return <Element color={color}>{children}</Element>;
};

Typography.defaultProps = {
  variant: 'h1Regular',
};
