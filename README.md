# 🌐 getcoords [![npm](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/package/getcoords) [![Build Status](https://travis-ci.org/melanieseltzer/getcoords.svg?branch=master)](https://travis-ci.org/melanieseltzer/getcoords) [![Known Vulnerabilities](https://snyk.io/test/github/melanieseltzer/getcoords/badge.svg)](https://snyk.io/test/github/melanieseltzer/getcoords)

> Get lat and long coordinates from any address

`getcoords` uses the Google Geocoding API to convert any address into geographic coordinates. Results are returned as an object:

```
{ lat: ..., lng: ... }
```

## Install

```
$ npm install getcoords
```

## API Key

In order to use the package, you must first obtain a Google API key and set `process.env.GOOGLE_GEOCOORDS_API_KEY` using `.env` file or similar. Please visit [the dev docs](https://developers.google.com/maps/documentation/geocoding/start#get-a-key) for instruction on how to obtain the key.

## Usage

```js
// .env
GOOGLE_GEOCOORDS_API_KEY=YOURKEYHERE
```

```js
// app.js
import getCoords from 'getCoords';
require('dotenv').config();
const { GOOGLE_GEOCOORDS_API_KEY } = process.env;

// Promise syntax
getCoords('Los Angeles, CA 90034', GOOGLE_GEOCOORDS_API_KEY)
  .then(res => console.log(res))
  .catch(error => console.log('Something went wrong'));

// Or use with Async/await!
(async () => {
  try {
    const latlng = await getCoords('Los Angeles, CA 90034', GOOGLE_GEOCOORDS_API_KEY);
    console.log(latlng);
  } catch (error) {
    console.error(error);
  }
})();

//=> { lat: 34.1022444, lng: -118.3401679 } 
```

## Related

- [getcoords-cli](https://github.com/melanieseltzer/getcoords-cli)

## License

MIT © [Melanie Seltzer](https://github.com/melanieseltzer)
