import { useEffect } from 'react';
import { getAllCountries, getCountryCode } from '../utils';

import { useGlobalContext } from '../context';
import Phrases from '../components/Phrases';
import { nanoid } from 'nanoid';
import Navbar from '../components/Navbar';

const Home = () => {
  const {
    country,
    setCountry,
    isLoading,
    setIsLoading,
    setCountriesList,
    countriesList,
    getCountryState,
  } = useGlobalContext();

  useEffect(() => {
    try {
      (async () => {
        const countryCode = await getCountryCode();
        await getCountryState(countryCode);
        console.log(country);
        const allCountries = await getAllCountries();
        setCountriesList(allCountries);
        // console.log(countriesList[0]);
        setIsLoading(false);
      })();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <h1 className="section-title">You are in {country.name}</h1>

          <h1 className="section-title phrases-here">
            Here you will find your Handy Phrases!
          </h1>

          <div className="cocktails-center">
            {isLoading ? (
              <h2>Tłumaczenie</h2>
            ) : (
              country.languagesArr.map((lng) => {
                return <Phrases key={nanoid()} language={lng} />;
              })
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
