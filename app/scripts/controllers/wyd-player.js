'use strict';

angular.module('controllers')
  .controller('WydPlayerCtrl', ['$scope', '$element', '$interval', '$log', function ($scope, $element, $interval, $log) {
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
    
    $interval(function() {
      var ct = audioplayer.getCurrentTime();
      var d = audioplayer.getDuration();
      var bt = audioplayer.getBuffered();
      
      var h = Math.round(ct/3600);
      var m = Math.round((ct%3600)/60);
      var s = Math.round(ct%60);
      // var added = audioplayer.paused() ? ' [pause]' : '';
      // element.innerHTML = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s + added;
      // TODO 170 is a fixed value
      var ct_width = Math.round(170*ct/d);
      element.style.width = width + 'px';
      // TODO 170 is a fixed value
      var bt_width = Math.round(170*bt/d);
      // element.style.width = width + 'px';
    }, 1000);
    
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
