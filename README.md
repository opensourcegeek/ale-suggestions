ale-suggestions
=========================

This is a prototype to experiment with @dwp/govuk-casa project. 

All the relevant changes are done in steps and in separate branches so that it's clear what changes went in to achieve certain functionality.

Functionality background:
-------------------------

This website runs you through simple list of questions to suggest you beers 

On a high level, 
  - you can choose whether you're an ale or lager drinker.
  - if you're an ale drinker, you may know the hops that you like.
  - if you're an ale drinker, you can select if you're a dark or pale ale drinker (just to keep it simple)
  - if you're a dark beer drinker, you'll get a list of beers that are worth trying.
  - if you know the hops you can select from a list of beers with those hops.
  - if you're not sure about the hops, you can select a list of beers you like and there will be a suggested list of beers based on your selection.
  - if you're a lager drinker you just get a simple list. 

Following are the branches available for you to checkout and see changes for each step

- step-1 : Prepare project and setup single page to select if you're beer drinker
           After this step, when you run the app, you must see a welcome page when you hit http://localhost:4000 (check port). From welcome page you can start journey by clicking on `Start` button. 

- step-2 : Add internationalization and validation to single page. 
           After this step, you should see additional translation files in locales directory and field-validators in definitions directory. When you run the app, and not select yes or no to the option you'd end up with error summary/description.

- step-3 : Added fork in the page. If user selects not a beer drinker the journey ends, if not it proceeds with journey
           After this step, you should see additional are-you-an-ale-drinker page if you select yes and if you select no it should take you to an end page

- step-4 : Added fork in the beer drinker journey. User gets an ale drinker or not question and if user selects not an ale drinker the journey ends, if not it proceeds with journey asking user to choose the hops they prefer
           After this step, you should see additional choose-your-hops page if you select yes and if you select no it should take you to no-ale-drinker page

- step-5 : Added dynamic (async) data load using prerender hook. This is a handy way to do API calls if you need to prepopulate some components like dropdown box or checkbox. 
           After this step, you should see no difference in UI but in the background the way checkboxes for hops list is added dynamically. 

- step-6 : Added final submit page and enabled generic error page.
           After this step, you should get a final submit page which shows list of ales that suit your hops selection from previous page.


How to run:
-----------

`export "DEBUG=*" PORT=4000 node app.js`
