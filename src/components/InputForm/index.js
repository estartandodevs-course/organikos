import { Input } from './styles';

export const InputForm = ({ type, text, size, name }) => {
  return <Input size={size} type={type} placeholder={text} name={name} />;
};
