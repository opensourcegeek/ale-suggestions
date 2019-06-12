
module.exports = () => {
  return {
    "are-you-a-beer-drinker": {
      view: 'pages/are-you-a-beer-drinker.njk',
      fieldValidators: require('./field-validators/are-you-a-beer-drinker'),
    },
    "are-you-an-ale-drinker": {
      view: 'pages/are-you-an-ale-drinker',
      fieldValidators: require('./field-validators/are-you-an-ale-drinker'),
    },
    "choose-your-hops": {
      view: 'pages/choose-your-hops',
      fieldValidators: require('./field-validators/choose-your-hops'),
      hooks: {
        prerender: async (req, res, next) => {
          // NB: Below async call is a stub and it mimics a promise based API call which will always resolve.
          try {
            const allHops = await getAllHopsAsync();
            res.locals.allHops = allHops.map(x => {
              return {
                value: x,
                text: x
              };
            });
            next();

          } catch(e) {
            // NB: If there was an error with API calls, return a generic error page to user (in compliance with GDS error pages)
            console.error(e);
            res.render('error.njk');
          }
        }
      }
    }

  };
}

const getAllHops = () => {
  return [
    'chinook',
    'citra',
    'saag',
    'fuggle'
  ];
}

const getAllHopsAsync = async () => {
  await delay(1000);
  return Promise.resolve([
    'chinook',
    'citra',
    'saag',
    'fuggle'
  ]);
  
}

const delay = delayInMillis => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(); 
      //rej();
    }, delayInMillis);
  });
}

