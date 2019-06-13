ale-suggestions
=========================

This is a prototype to experiment with [@dwp/govuk-casa](https://github.com/dwp/govuk-casa) project. 

All the relevant changes are done in steps and in separate branches so that it's clear what changes went in to achieve certain functionality.

Functionality background:
-------------------------

This website runs you through simple list of questions to suggest you beers 

On a high level, 
  - if you drink beers, if not you exit the journey
  - Then you can choose if you're an ale or lager drinker, if you like lagers then journey exits here.
  - if you're an ale drinker, you may know the hops that you like.
  - if you know the hops you can select hops you like in your beer.
  - based on your hops selection you get a list of beers that has those hops.

The hops list could come from an external API call, to keep this tutorial simple there's an async function that returns the list. The choose your hops page is built using that dynamic list.

Following are the branches available for you to checkout and see changes for each step

- [step-1](https://github.com/opensourcegeek/ale-suggestions/tree/step-1) : Prepare project and setup single page to select if you're beer drinker
           After this step, when you run the app, you must see a welcome page when you hit http://localhost:4000 (check port). From welcome page you can start journey by clicking on `Start` button. 

- [step-2](https://github.com/opensourcegeek/ale-suggestions/tree/step-2) : Add internationalization and validation to single page. 
           After this step, you should see additional translation files in locales directory and field-validators in definitions directory. When you run the app, and not select yes or no to the option you'd end up with error summary/description.

- [step-3](https://github.com/opensourcegeek/ale-suggestions/tree/step-3) : Added fork in the page. If user selects not a beer drinker the journey ends, if not it proceeds with journey
           After this step, you should see additional are-you-an-ale-drinker page if you select yes and if you select no it should take you to an end page

How to run:
-----------

`export "DEBUG=*" PORT=4000 node app.js`
