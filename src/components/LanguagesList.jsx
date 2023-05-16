import { nanoid } from 'nanoid';
import { useGlobalContext } from '../context';

const LanguagesList = ({ languages }) => {
  //   const languagesArray = () => {
  //     let arr = [];
  //     for (const [key, value] of Object.entries(languages)) {
  //       arr.push(key);
  //     }
  //     return arr;
  //   };
  // };
  // return (
  //   {languagesArray().map((language) => {return (
  //     <div key={nanoid()} >
  //     <h2>{language}</h2>
  //   </div>
  //   )})}
  return <h2>Languages list</h2>;
};
export default LanguagesList;
