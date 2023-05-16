import { createContext, useContext, useState } from 'react';
import { originalPhrases } from './assets/data';

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
        originalPhrases,
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
