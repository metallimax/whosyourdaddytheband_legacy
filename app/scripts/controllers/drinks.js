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
            url: 'http://www.leffe.com',
          },
          {
            name: 'La Goudale',
            logo: 'images/drinks/beer-goudale.png',
            url: 'http://www.brasseurs-gayant.com/portfolio/la-goudale',
          },
          {
            name: 'Jeanlain',
            logo: 'images/drinks/beer-jenlain.png',
            url: 'http://jenlain.fr',
          }
        ]
      },
      {
        type: 'Whisk(e)y',
        items: [
          {
            name: 'Jack Daniel\'s',
            logo: 'images/drinks/whiskey-jd.jpg',
            url: 'http://www.jackdaniels.com',
          },
          {
            name: 'Connemara',
            logo: 'images/drinks/whiskey-connemara.jpg',
            url: 'http://www.connemarawhiskey.com',
          }
        ]
      }
    ];
  });
