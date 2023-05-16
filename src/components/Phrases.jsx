import { useGlobalContext } from '../context';
import { nanoid } from 'nanoid';
import {
  convertLanguageFormat,
  fetchTranslation,
  translatePhrases,
} from '../utils';
import { languagesDictionary } from '../assets/data';
import { useEffect, useState } from 'react';
import Phrase from './Phrase';

const Phrases = ({ language }) => {
  const { originalPhrases, country } = useGlobalContext();
  const [phrases, setPhrases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  language = {
    ...language,
    key: convertLanguageFormat(language.key, languagesDictionary()),
  };

  const translate = async () => {
    try {
      let translations = [];

      for (const phrase of originalPhrases) {
        const translation = await fetchTranslation(phrase, language.key);
        translations.push(translation);
      }
      setPhrases(translations);
      console.log(translations);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    translate();
  }, []);

  return (
    <article className="cocktail">
      <h1>{language.value}</h1>
      {phrases.map((phrase) => {
        return <Phrase key={nanoid()} phrase={phrase[0].translatedText} />;
      })}
    </article>
  );
};

export default Phrases;
