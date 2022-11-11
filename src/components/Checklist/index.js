import { ChecklistWrapper } from './styles';

export const Checklist = ({ optionsList = [], name = '' }) => {
  return (
    <ChecklistWrapper>
      {optionsList?.map(option => (
        <label key={name + option}>
          <input type="radio" name={name} value={option} />
          <span>{option}</span>
        </label>
      ))}
    </ChecklistWrapper>
  );
};
