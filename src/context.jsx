import { createContext, useContext, useState } from 'react';
import { convertedLanguages } from './assets/data';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{
        country,
        setCountry,
        isLoading,
        setIsLoading,
        convertedLanguages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
