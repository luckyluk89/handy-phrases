import { useEffect, useState } from 'react';
import { getCountry, getCountryCode } from '../utils';

import Loading from '../components/Loading';
import axios from 'axios';
import { useGlobalContext } from '../context';

const Home = () => {
  const { country, setCountry, isLoading, setIsLoading } = useGlobalContext();
  useEffect(() => {
    (async () => {
      try {
        const code = await getCountryCode();
        const result = await getCountry(code);
        setCountry({ name: result.name.common });
        // console.log(result);
        // console.log(result.name.common);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  console.log(country);
  if (isLoading) return <h3>Wczytywanie</h3>;

  if (!isLoading) return <h3>Twoja lokalizacja: {country.name}</h3>;
};

export default Home;
