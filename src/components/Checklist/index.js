import { useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';
import { ChecklistWrapper } from './styles';

export const Checklist = ({ optionsList = [], name = '' }) => {
  const { handlePayment, handleDistribution } = useContext(OrderContext);
  const optionFunction = name === 'payment' ? handlePayment : handleDistribution;

  return (
    <ChecklistWrapper>
      {optionsList?.map(option => (
        <label key={name + option}>
          <input type="radio" name={name} value={option} onClick={() => optionFunction(option)} />
          <span>{option}</span>
        </label>
      ))}
    </ChecklistWrapper>
  );
};
