'use strict';

angular.module('controllers')
  .controller('GlobalCtrl', ['$scope', '$route', function ($scope, $route) {
    $scope.$on('$routeChangeSuccess', function() {
      $scope.route = $route.current.$$route.originalPath;
    });
    
    $scope.tracks = [
      {
        id: 'letsgiveahand',
        title: 'Let\'s Give a Hand',
        album: 'Who\'s Your Daddy?',
        src: ['https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/Audio/Compos/Who%27s%20Your%20Daddy/01%20-%20Let%27s%20Give%20A%20Hand.mp3'],
        number: 1
      },
      {
        id: 'hestermofet',
        title: 'Hester Mofet',
        album: 'Who\'s Your Daddy?',
        // src: ['http://dl.dropbox.com/u/33531527/whosyourdaddytheband/Audio/Compos/hester_mofet.mp3'],
        src: ['https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/Audio/Compos/Who%27s%20Your%20Daddy/02%20-%20Hester%20Mofet.mp3'],
        number: 2
      },
      {
        id: 'buildmyhate',
        title: 'Build My Hate',
        album: 'Who\'s Your Daddy?',
        src: ['https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/Audio/Compos/Who%27s%20Your%20Daddy/03%20-%20Build%20My%20Hate.mp3'],
        number: 3
      },
      {
        id: 'ravage',
        title: 'Ravage',
        album: 'Who\'s Your Daddy?',
        src: ['https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/Audio/Compos/Who%27s%20Your%20Daddy/04%20-%20Ravage%20%2B%20Finish.mp3'],
        number: 4
      },
      {
        id: 'kyms',
        title: 'K.Y.M.S.',
        album: 'Who\'s Your Daddy?',
        src: ['https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/Audio/Compos/Who%27s%20Your%20Daddy/05%20-%20K.Y.M.S.mp3'],
        number: 5
      },
      {
        id: 'smashyourassout',
        title: 'Smash Your Ass Out',
        album: 'Bonus',
        number: 1
      },
      {
        id: 'motorhc',
        title: 'Motor HC',
        album: 'Bonus',
        number: 2
      }
    ];
  }]);
