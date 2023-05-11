import { useEffect } from 'react';
import { getCountry, getCountryCode, translate } from '../utils';

import Loading from '../components/Loading';
import axios from 'axios';
import { useGlobalContext } from '../context';
import { convertedLanguages } from '../assets/data';

const Home = () => {
  const { country, setCountry, isLoading, setIsLoading } = useGlobalContext();
  useEffect(() => {
    (async () => {
      try {
        const code = await getCountryCode();
        const result = await getCountry('ma');
        console.log(result);
        setCountry({
          name: result.name.common,
          code: result.cca2,
          languages: result.languages.ara,
        });
        // console.log(country);
        // console.log(result);
        // console.log(result.name.common);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  console.log(country);
  console.log(convertedLanguages);
  // console.log(country.languages[0]);
  console.log(convertedLanguages.get('ara'));
  translate('Hello', 'ar');
  // console.log(languagesMap());

  return (
    <main>
      <h3>
        {isLoading ? 'Wczytywanie' : `Twoja lokalizacja: ${country.name}`}
      </h3>
      {/* {if (isLoading) return <h3>Wczytywanie</h3>;
      if (!isLoading) return <h3>Twoja lokalizacja: {country.name}</h3>;} */}
    </main>
  );
};

export default Home;
