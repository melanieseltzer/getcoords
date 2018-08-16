import test from 'ava';
import getCoords from './lib';

const sandbox = require('sinon').createSandbox();

test('successfully resolves with coordinates', async t => {
  const value = await getCoords('Los Angeles, 90064');
  t.deepEqual(value, { lat: 34.0386656, lng: -118.4221519 });
});

test('throws error if address not supplied', async t => {
  const error = await t.throwsAsync(getCoords(''));
  t.is(error.message, 'Please enter an address.');
});

test('throws error if GOOGLE_GEOCOORDS_API_KEY not set', async t => {
  // Stub the env variable for this test only
  sandbox.stub(process, 'env').value({ GOOGLE_GEOCOORDS_API_KEY: '' });

  const error = await t.throwsAsync(getCoords('Los Angeles, 90064'));
  t.is(error.message, 'Cannot find Google api key.');
});

test.afterEach(t => {
  // Make sure to restore the env variable after all tests
  sandbox.restore();
});
