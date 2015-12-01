'use strict';

angular.module('controllers')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.news = [
      {
        date: '2014-01-26',
        author: '@Max',
        title: 'Welcome to the new band and website design',
        content: 'We recently changed the design of the website'
      },
      {
        date: '2014-06-21',
        author: '@Max',
        title: 'Who\'s Your Daddy? @ Fête de la Musique d\'Albertville',
        content: '1st gig'
      },
      {
        date: '2014-09-13',
        author: '@Max',
        title: 'Zikolokos prend l\'air',
        content: 'Rehearsal place gig with friends & family'
      },
      {
        date: '2016-01-09',
        author: '@Max',
        title: 'Chez Drey',
        content: 'Who\'s Your Daddy? will be at Chez Drey to a concert w/ Sinorma & w/ Nevercold'
      }
    ];
  }]);
