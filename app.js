const path = require('path');

const express = require('express');
const expressSession = require('express-session');
const casa = require('@dwp/govuk-casa');

const FileStore = require('session-file-store')(expressSession);
const sessionSecret = 'some-secret';

const setupWelcomePage = router => {
  router.get('/', (req, res) => {
    res.render('welcome.njk');
  });
}

const endJourneyPage = router => {
  router.get('/end', (req, res) => {
    res.render('end.njk');
  });
}

const noAleDrinkerPage = router => {
  router.get('/no-ale-drinker', (req, res) => {
    res.render('no-ale-drinker.njk');
  });
}

const errorPage = router => {
  router.get('/error', (req, res) => {
    res.render('error.njk');
  });
}

const startApp = () => {
  const sessionStore = new FileStore({
    path: path.resolve(__dirname, 'sessions'),
    encrypt: true,
    reapInterval: 300,
    secret: sessionSecret,
  });

  const app = express();
  const port = process.env.PORT || 4000;

  const casaApp = casa(app, {
    views: {
      dirs: [ path.resolve(__dirname, 'views') ]
    },
    compiledAssetsDir: path.resolve(__dirname, 'static'),
    serviceName: 'Are you ready for a beer',
    sessions: {
      store: sessionStore,
      name: 'myappsessionid',
      secret: sessionSecret,
      ttl: 60 * 60,
      secure: false
    },
    i18n: {
      dirs: [ path.resolve(__dirname, 'locales') ],
      locales: [ 'en', 'cy' ]
    }
  });

  casaApp.loadDefinitions(require('./definitions/page')(), require('./definitions/journey')()); 

  setupWelcomePage(casaApp.router);
  endJourneyPage(casaApp.router);
  noAleDrinkerPage(casaApp.router);

  app.listen(port, () => {
    console.log('App started on', port);
  });
}

startApp();
