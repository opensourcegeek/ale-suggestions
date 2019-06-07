beer-ready
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
- step-2 : Add internationalization 

How to run:
-----------

`export "DEBUG=*" PORT=4000 node app.js`
