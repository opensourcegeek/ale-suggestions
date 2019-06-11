
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
    }

  };
}
