'use strict';

angular.module('controllers')
  .controller('GlobalCtrl', ['$scope', '$route', function ($scope, $route) {
    $scope.$on('$routeChangeSuccess', function() {
      $scope.route = $route.current.$$route.originalPath;
    });
    
    $scope.tracks = [
      {
        title: 'Let\'s Give a Hand',
        album: 'Who\'s Your Daddy?',
        number: 1
      },
      {
        title: 'Hester Mofet',
        album: 'Who\'s Your Daddy?',
        src: ['http://dl.dropbox.com/u/33531527/whosyourdaddytheband/Audio/Compos/hester_mofet.mp3'],
        number: 2
      },
      {
        title: 'Build My Hate',
        album: 'Who\'s Your Daddy?',
        number: 3
      }
    ];
  }]);
