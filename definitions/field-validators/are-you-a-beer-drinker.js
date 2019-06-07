const Validation = require('@dwp/govuk-casa/lib/Validation');
const r = Validation.rules;
const sf = Validation.SimpleField;

module.exports = {
  'drinkBeer': sf([
    r.required.bind({
      errorMsg: 'are-you-a-beer-drinker:is-empty'
    })
  ])
};
