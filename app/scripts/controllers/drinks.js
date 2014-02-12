'use strict';

angular.module('whosyourdaddythebandApp')
  .controller('DrinksCtrl', function ($scope) {
    $scope.drinks = [
      {
        type: 'Beers',
        items: [
          {
            name: 'Leffe',
            id: 'drink-leffe',
            url: 'http://www.leffe.com'
          },
          {
            name: 'La Goudale',
            id: 'drink-goudale',
            url: 'http://www.brasseurs-gayant.com/portfolio/la-goudale'
          },
          {
            name: 'Jeanlain',
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
            id: 'drink-jd',
            url: 'http://www.jackdaniels.com'
          },
          {
            name: 'Connemara',
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
