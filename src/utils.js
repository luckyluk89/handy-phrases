const getLocationPromise = () => {
  return new Promise(function (resolve, reject) {
    // Promisifying the geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
};

export const getPosition = async () => {
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
