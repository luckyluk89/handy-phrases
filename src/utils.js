import axios from 'axios';
import { useGlobalContext } from './context';

const getLocationPromise = () => {
  return new Promise(function (resolve, reject) {
    // Promisifying the geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
};

const getCoordinates = async () => {
  try {
    const res = await getLocationPromise();
    const coordinates = {
      latitude: res.coords.latitude,
      longitude: res.coords.longitude,
    };
    return coordinates;
  } catch (err) {
    console.log(err);
  }
};

export const getCountryCode = async function () {
  try {
    const { latitude, longitude } = await getCoordinates();
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );
    const data = await response.json();
    const countryCode = data.countryCode.toUpperCase();
    console.log(countryCode);
    return countryCode;
  } catch (err) {
    console.error(err);
  }
};

export const getCountry = async (countryCode) => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    const data = response.data;
    const country = data[0];
    console.log(data);
    return country;
  } catch (err) {
    console.log(err);
  }
};

export const getAllCountries = async () => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/all`);
    const countries = response.data;
    console.log(countries);
    console.log(typeof countries);
    return countries;
  } catch (err) {
    console.log(err);
  }
};

export const fetchTranslation = async (phrase, targetLng) => {
  const res = await axios.post(
    `https://translation.googleapis.com/language/translate/v2?key=AIzaSyCQOlPEccv-XnbOLIm1ZczANzqSOBWkxuk`,
    { q: phrase, target: targetLng }
  );
  return res.data.data.translations;
};

export const translatePhrases = async (phrases, targetLng) => {
  const translatedPhrases = await phrases.map(async (phrase) => {
    const newPhrase = await fetchTranslation(phrase, targetLng);
    return newPhrase;
  });
  return translatedPhrases;
};

export const convertLanguageFormat = (languageCode, map) => {
  const newFormat = map.get(languageCode);
  // console.log(languageCode);
  // console.log(map);
  // console.log(map.get(languageCode));
  return newFormat;
};

export const toArray = (map) => {
  let arr = [];
  map.forEach((value, key) => {
    arr = [...arr, { key, value }];
  });
  return arr;
};

export const getCountryByName = (countryName, countriesList) => {
  const country = countriesList.find(
    (country) => country.name.common === countryName
  );
  return country;
};
