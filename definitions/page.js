
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
          try {
            const allHops = await getAllHops();
            res.locals.allHops = allHops.map(x => {
              return {
                value: x,
                text: x, // TODO: possibly use translate directly from here?
                // checked: true/false - may be we could look up data in session at this point directly???
              };
            });
            console.log(res.local.allHops);

            next();

          } catch(e) {
            console.log(e);
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
  console.log('returning');
  return Promise.resolve([
    'chinook',
    'citra',
    'saag',
    'fuggle'
  ]);
}

const delay = delayInMillis => {
  return new Promise((_, res) => {
    setTimeout(() => res(), delayInMillis);
  });
}

/*
 [{
      value: "citra",
      text: "Citra",
      checked: true if includes(formData.hops, "citra") else false
    },{
      value: "chinook",
      text: "Chinook",
      checked: true if includes(formData.hops, "chinook") else false
    }, {
      value: "fuggle",
      text: "Fuggle",
      checked: true if includes(formData.hops, "fuggle") else false
    }, {
      value: "saaz",
      text: "Saaz",
      checked: true if includes(formData.hops, "saaz") else false
    }]

 * */
