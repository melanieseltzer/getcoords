import axios from 'axios';

require('@babel/polyfill');

const getCoords = async (address, key) => {
  if (!key || !address) {
    return null;
  }

  const encodedAddress = encodeURIComponent(address);

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`;

  const response = await axios.get(url);
  const { location } = response.data.results[0].geometry;
  return location;
};

export default getCoords;
