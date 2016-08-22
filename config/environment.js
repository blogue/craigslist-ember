/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    firebase: {
    apiKey: "AIzaSyCZxUSV3XDRA4UyjquaxB5CB706dIv0LKw",
    authDomain: "craigslist-dd4c3.firebaseapp.com",
    databaseURL: "https://craigslist-dd4c3.firebaseio.com",
    storageBucket: "craigslist-dd4c3.appspot.com",
    },
    modulePrefix: 'craigslist',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.myApiKey = process.env.apiKey;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
