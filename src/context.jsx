import { createContext, useContext, useState } from 'react';
import { originalPhrases } from './assets/data';
import { getCountry, getCountryByName, getCountryCode, toArray } from './utils';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [countriesList, setCountriesList] = useState([]);
  const [localize, setLocalize] = useState(false);

  const getCountryState = async (countryCode) => {
    try {
      const result = await getCountry(countryCode);
      console.log(result);
      // console.log(result);
      const languagesMap = new Map(Object.entries(result.languages));
      const languagesArr = toArray(new Map(Object.entries(result.languages)));
      setCountry({
        name: result.name.common,
        flag: result.flags.png,
        code: result.cca2,
        languagesMap: languagesMap,
        languagesArr: languagesArr,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppContext.Provider
      value={{
        country,
        setCountry,
        isLoading,
        setIsLoading,
        originalPhrases,
        countriesList,
        setCountriesList,
        getCountryState,
        getCountryCode,
        getCountryByName,
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
