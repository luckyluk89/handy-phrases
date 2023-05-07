import { useEffect, useState } from 'react';
import { getCountryCode } from '../utils';
import Loading from '../components/Loading';

const Home = () => {
  const [country, setCountry] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const code = await getCountryCode();
        setCountry(code);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  if (isLoading) return <h3>Wczytywanie</h3>;

  if (!isLoading) return <h3>Twoja lokalizacja: {country}</h3>;
};

export default Home;
