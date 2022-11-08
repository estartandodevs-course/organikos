import { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tagFilter, setTagFilter] = useState([]);

  const handleIsTouchable = value => {
    const newArray = [...tagFilter];
    if (tagFilter?.length) {
      const index = newArray.indexOf(value);
      if (index === -1) {
        newArray.push(value);
      } else {
        newArray.splice(index, 1);
      }
      setTagFilter(newArray);
    } else {
      newArray.push(value);
      setTagFilter(newArray);
    }
  };

  return (
    <FilterContext.Provider value={{ searchTerm, setSearchTerm, tagFilter, handleIsTouchable }}>
      {children}
    </FilterContext.Provider>
  );
};
