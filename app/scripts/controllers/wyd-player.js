'use strict';

angular.module('controllers')
  .controller('WydPlayerCtrl', ['$scope', '$element', '$log', function ($scope, $element, $log) {
    $scope.wydPlayerAudio = $element.find('#wyd-audioplayer')[0];
    
    $scope.playlist = {
      current: 0,
      tracks: $scope.tracks.filter(function(track) {
        return !!track.src;
      }),
      currentTitle: ''
    };
    
    $scope.changeTrack = function(trackNumber) {
      $scope.playlist.current = trackNumber;
      if($scope.playlist.tracks.length > 0 && trackNumber < $scope.playlist.tracks.length) {
        $scope.playlist.currentTitle = $scope.playlist.tracks[$scope.playlist.current].title;
        $scope.wydPlayerAudio.src = $scope.playlist.tracks[$scope.playlist.current].src;
      }
      else {
        $scope.wydPlayerAudio.src = '';
      }
    };
    
    $scope.changeTrack(0);
    
    $scope.wydPlayer = {
      previous: function() {
        $log.info('wydPlayer.previous()');
      },
      play: function() {
        $scope.wydPlayerAudio.play();
      },
      pause: function() {
        $scope.wydPlayerAudio.pause();
      },
      next: function() {
        $log.info('wydPlayer.next()');
      },
      volume: function() {
        $log.info('wydPlayer.volume()');
      },
      list: function() {
        $log.info('wydPlayer.list()');
      }
    };
  }]);
