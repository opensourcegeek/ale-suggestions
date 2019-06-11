
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
        prerender: async (_, res, next) => {
          try {
            const allHops = await getAllHopsAsync();
            console.log('', res.locals.t);
            res.locals.allHops = allHops.map(x => {
              return {
                value: x,
                text: x
              };
            });
            next();

          } catch(e) {
            console.error(e);
            //res.render('error.njk');
            next();
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
      //res(); 
      rej();
    }, delayInMillis);
  });
}

