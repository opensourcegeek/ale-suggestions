
const Validation = require('@dwp/govuk-casa/lib/Validation');
const r = Validation.rules;
const sf = Validation.SimpleField;

module.exports = {
  'drinkAle': sf([
    r.required.bind({
      errorMsg: 'are-you-an-ale-drinker:is-empty'
    }),
    r.inArray.bind({
      errorMsg: 'are-you-an-ale-drinker:is-not-allowed',
      source: ['yes', 'no']
    })
  ])
};
