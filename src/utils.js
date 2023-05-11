import axios from 'axios';

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
    console.log(coordinates);
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
    const countryCode = data.countryCode;
    return countryCode;
  } catch (err) {
    console.error(err);
  }
};

export const getCountry = async function (countryCode) {
  try {
    // const countryCode = await getCountryCode();
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    const data = await response.json();
    const country = data[0];
    return country;
  } catch (err) {
    console.error(err);
  }
};

export const getCountry2 = async (countryCode) => {
  try {
    // const countryCode = await getCountryCode();
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    const data = await response.json();
    const country = data[0];
    return country;
  } catch (err) {
    console.error(err);
  }
};

export const translate = async (text, targetLng) => {
  let res = await axios.post(
    `https://translation.googleapis.com/language/translate/v2?key=AIzaSyCQOlPEccv-XnbOLIm1ZczANzqSOBWkxuk`,
    { q: text, target: targetLng }
  );
  console.log(res);
};
