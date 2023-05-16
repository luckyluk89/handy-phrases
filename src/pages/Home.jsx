import { useEffect } from 'react';
import {
  getCountry,
  getCountryCode,
  toArray,
  translatePhrases,
} from '../utils';

import { useGlobalContext } from '../context';
import Phrases from '../components/Phrases';
import { nanoid } from 'nanoid';

const Home = () => {
  const { country, setCountry, isLoading, setIsLoading } = useGlobalContext();

  useEffect(() => {
    (async () => {
      try {
        const result = await getCountry('ca');
        console.log(result);
        const languagesMap = new Map(Object.entries(result.languages));
        const languagesArr = toArray(new Map(Object.entries(result.languages)));
        setCountry({
          name: result.name.common,
          code: result.cca2,
          languagesMap: languagesMap,
          languagesArr: languagesArr,
        });

        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <main>
      <section className="section">
        <h1 className="section-title">Handy Phrases</h1>
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
  );
};

export default Home;
