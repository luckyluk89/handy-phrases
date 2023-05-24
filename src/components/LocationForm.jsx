import { nanoid } from 'nanoid';
import { useGlobalContext } from '../context';

const LocationForm = () => {
  const { countriesList, getCountryState, country, getCountryByName } =
    useGlobalContext();

  const changeHandler = (e) => {
    // console.log(e.target.value);
    const countryName = e.target.value;
    const newCountry = getCountryByName(countryName, countriesList);
    const newCountryCode = newCountry.cca2;
    getCountryState(newCountryCode);
    // console.log(countriesList);
    // console.log(newCountry);
    // getCountryState('ca');
    // console.log(countriesList);
    // let countriesListArr = [];
    // countriesList.map((country) => {
    //   const objectEntries = Object.entries(country);
    //   countriesListArr.push(objectEntries);
    // });
    // console.log(countriesListArr);
    // setCountry((name = e.target.value));
  };

  return (
    <form>
      <label>
        Pick your favorite flavor:
        <select value={country.name} onChange={(e) => changeHandler(e)}>
          {countriesList.map((item) => {
            return (
              <option key={nanoid()} value={item.name.common}>
                {item.name.common}
              </option>
            );
          })}
        </select>
      </label>
      {/* <input type="submit" value="Submit" /> */}
    </form>
  );
};
export default LocationForm;
