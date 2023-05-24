import { nanoid } from 'nanoid';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { useGlobalContext } from '../context';

const Phrase = ({ key, phrase, originalPhrase }) => {
  const { originalPhrases } = useGlobalContext();
  const deleteHandler = () => {};

  return (
    <div className="phrase-line">
      <h3>{phrase}</h3>
      <h3 className="original-phrase">{originalPhrase}</h3>
      <div className="btn">
        <AiOutlineMinusCircle />
      </div>
      {/* <button className="btn">{AiOutlineMinusCircle}</button> */}
    </div>
  );
};
export default Phrase;
