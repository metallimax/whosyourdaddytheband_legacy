'use strict';

angular.module('controllers')
  .controller('AudioCtrl', ['$scope', function ($scope) {
    $scope.tracks = [
      {
        title: 'Let\'s Give a Hand',
        album: 'Who\'s Your Daddy?',
        number: 1
      },
      {
        title: 'Hester Mofet',
        album: 'Who\'s Your Daddy?',
        number: 2
      },
      {
        title: 'Build My Hate',
        album: 'Who\'s Your Daddy?',
        number: 3
      }
    ];
  }]);
