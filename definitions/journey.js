const UserJourney = require('@dwp/govuk-casa/lib/UserJourney');

module.exports = () => {
  let start = new UserJourney.Road();
  let aleRoad = new UserJourney.Road();
  let end = new UserJourney.Road();

  start.addWaypoints([
    'are-you-a-beer-drinker',
  ]);

  aleRoad.addWaypoints(['are-you-an-ale-drinker']);
  start.fork([end, aleRoad], (choices, context) => {
    if (context['are-you-a-beer-drinker'] && context['are-you-a-beer-drinker'].drinkBeer === 'no') {
      console.log('Should end the journey');
      return choices[0];
    }
    console.log('Should carry on to ale drinker journey');
    return choices[1];
  });

  aleRoad.mergeWith(end);

  end.addWaypoints([ '/end' ]);

  // do some forking
  let journey = new UserJourney.Map();
  journey.startAt(start);
  end.end();
  return journey;
}
