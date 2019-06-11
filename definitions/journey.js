const UserJourney = require('@dwp/govuk-casa/lib/UserJourney');

module.exports = () => {
  let start = new UserJourney.Road();
  let aleRoad = new UserJourney.Road();
  let earlyEnd = new UserJourney.Road();
  let noAleDrinkerEnd = new UserJourney.Road();
  let aleDrinkerRoad = new UserJourney.Road();

  start.addWaypoints([
    'are-you-a-beer-drinker',
  ]);

  aleRoad.addWaypoints([
    'are-you-an-ale-drinker',
  ]);
  start.fork([earlyEnd, aleRoad], (choices, context) => {
    if (context['are-you-a-beer-drinker'] && context['are-you-a-beer-drinker'].drinkBeer === 'no') {
      return choices[0];
    }
    return choices[1];
  });

  aleRoad.fork([noAleDrinkerEnd, aleDrinkerRoad], (choices, context) => {
    if (context['are-you-an-ale-drinker'] && context['are-you-an-ale-drinker'].aleDrinker === 'no') {
      return choices[0];
    }
    return choices[1];
  });

  aleDrinkerRoad.addWaypoints([
    'choose-your-hops'
  ]);

  earlyEnd.addWaypoints([ '/end' ]).end();
  noAleDrinkerEnd.addWaypoints([ '/no-ale-drinker' ]).end();

  let journey = new UserJourney.Map();
  journey.startAt(start);
  return journey;
}
