import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{ country, setCountry, isLoading, setIsLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
