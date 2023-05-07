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
