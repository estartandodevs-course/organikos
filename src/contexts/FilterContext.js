import { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tagFilter, setTagFilter] = useState([]);

  const handleIsTouchable = value => {
    let copyArray = [...tagFilter];
    const index = copyArray.indexOf(value);
    if (index < 0) {
      copyArray.push(value);
    } else {
      copyArray.splice(index, 1);
    }
    setTagFilter(copyArray);
  };
  return (
    <FilterContext.Provider value={{ searchTerm, setSearchTerm, tagFilter, handleIsTouchable }}>
      {children}
    </FilterContext.Provider>
  );
};
