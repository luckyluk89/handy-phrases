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
import { AiOutlinePlusCircle } from 'react-icons/ai';

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
      <h2>{language.value}</h2>
      {phrases.map((phrase, index) => {
        return (
          <Phrase
            key={nanoid()}
            phrase={phrase[0].translatedText}
            originalPhrase={originalPhrases[index]}
          />
        );
      })}
      <div className="btn plus">
        <AiOutlinePlusCircle />
      </div>
    </article>
  );
};

export default Phrases;
