const UserJourney = require('@dwp/govuk-casa/lib/UserJourney');

module.exports = () => {
  let start = new UserJourney.Road();

  start.addWaypoints([
    'are-you-a-beer-drinker'
  ]);


  // do some forking

  let journey = new UserJourney.Map();
  journey.startAt(start);
  return journey;
}
