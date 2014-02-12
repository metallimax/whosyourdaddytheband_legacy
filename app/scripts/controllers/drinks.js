'use strict';

angular.module('whosyourdaddythebandApp')
  .controller('DrinksCtrl', function ($scope) {
    $scope.drinks = [
      {
        type: 'Beers',
        items: [
          {
            name: 'Leffe',
            logo: 'images/drinks/beer-leffe.png',
            id: 'drink-leffe',
            url: 'http://www.leffe.com'
          },
          {
            name: 'La Goudale',
            logo: 'images/drinks/beer-goudale.png',
            id: 'drink-goudale',
            url: 'http://www.brasseurs-gayant.com/portfolio/la-goudale'
          },
          {
            name: 'Jeanlain',
            logo: 'images/drinks/beer-jenlain.png',
            id: 'drink-jeanlain',
            url: 'http://jenlain.fr'
          }
        ]
      },
      {
        type: 'Whisk(e)y',
        items: [
          {
            name: 'Jack Daniel\'s',
            logo: 'images/drinks/whiskey-jd.jpg',
            id: 'drink-jd',
            url: 'http://www.jackdaniels.com'
          },
          {
            name: 'Connemara',
            logo: 'images/drinks/whiskey-connemara.jpg',
            id: 'drink-connemara',
            url: 'http://www.connemarawhiskey.com'
          }
        ]
      },
      {
        type: 'Miscellaneous',
        items: [
          {
            name: 'Gold Strike',
            id: 'drink-goldstrike',
            url: 'http://goldstrike.fr'
          }
        ]
      }
    ];
  });
