'use strict';

angular.module('controllers')
  .controller('VideoCtrl', ['$scope', '$sce', function ($scope, $sce) {
    $scope.video = {
      items: [
        {
          title: 'Fête de la Musique Albertville - 2014',
          src: $sce.trustAsResourceUrl('//www.youtube.com/embed/alZup0lHcGo')
        }
      ]
    };
  }]);
