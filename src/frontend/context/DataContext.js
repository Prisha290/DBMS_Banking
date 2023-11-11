// DataContext.js (Create a context)
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchDataFromMySQL = async () => {
    // Fetch data from MySQL
    // ...

    setData({"n":"a"});
  };

  return (
    <DataContext.Provider value={{ data, fetchDataFromMySQL }}>
      {children}
    </DataContext.Provider>
  );
};
