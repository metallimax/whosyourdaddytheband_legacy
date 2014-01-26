'use strict';

angular.module('controllers')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.news = [
      {
        date: '2014-01-26',
        author: 'Max',
        title: 'Welcome to the new band and website design',
        content: 'We recently changed the design of the website'
      }
    ];
  }]);
