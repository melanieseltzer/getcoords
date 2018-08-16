const axios = require('axios');

const getCoords = async address => {
  // This will either come from a .env file
  // or if the user sets it globally in their shell init
  const { GOOGLE_GEOCOORDS_API_KEY: key } = process.env;

  // Handle errors
  if (!key) {
    throw new Error('Cannot find Google api key.');
  }

  if (!address) {
    throw new Error('Please enter an address.');
  }

  // Need to encode the address for the request URL
  const encodedAddress = encodeURIComponent(address);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`;

  // Return the location data from the resolved request
  const response = await axios.get(url);
  const { location } = response.data.results[0].geometry;
  return location;
};

module.exports = getCoords;
