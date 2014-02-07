'use strict';

angular.module('controllers')
  .controller('GlobalCtrl', ['$scope', '$route', '$element', '$interval', '$cookies', function ($scope, $route, $element, $interval, $cookies) {
    $scope.$on('$routeChangeSuccess', function() {
      $scope.route = $route.current.$$route.originalPath;
    });
    
    $scope.splashed = $cookies.splashed;
    
    $scope.splash = function() {
      $cookies.splashed = true;
      $scope.splashed = $cookies.splashed;
    };
    
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
    
    $scope.elapsed = 0;
    $scope.buffered = 0;
    $scope.time = '00:00';
    $scope.playing = false;
    
    $interval(function() {
      var ct = $scope.wydPlayerAudio.currentTime;
      var d = $scope.wydPlayerAudio.duration;
      var bt = $scope.wydPlayerAudio.buffered.length > 0 && $scope.wydPlayerAudio.buffered.end(0) || 0;
      
      if(!d && !bt) {
        return;
      }
      
      // var h = Math.round(ct/3600);
      var m = Math.round((ct%3600)/60);
      var s = Math.round(ct%60);
      $scope.time = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
      $scope.buffered = Math.round(100*bt/d);
      if($scope.buffered !== 0) {
        $scope.elapsed = Math.round(10000*ct/(d*$scope.buffered));
      }
      
      if($scope.playing && ct === d) {
        $scope.wydPlayer.next();
      }
    }, 1000);
    
    $scope.wydPlayer = {
      previous: function() {
        if($scope.playlist.current === 0) {
          $scope.playlist.current = $scope.playlist.tracks.length;
        }
        $scope.changeTrack($scope.playlist.current - 1);
        if($scope.playing) {
          $scope.wydPlayer.play();
        }
      },
      play: function() {
        $scope.wydPlayerAudio.play();
        $scope.playing = !$scope.wydPlayerAudio.paused;
      },
      pause: function() {
        $scope.wydPlayerAudio.pause();
        $scope.playing = !$scope.wydPlayerAudio.paused;
      },
      next: function() {
        $scope.changeTrack(($scope.playlist.current + 1) % $scope.playlist.tracks.length);
        if($scope.playing) {
          $scope.wydPlayer.play();
        }
      },
      volume: function() {
        // TODO implement this
      },
      list: function() {
        // TODO implement this
      },
      jumpToAndPlay: function(trackId) {
        for(var i=0, len=$scope.playlist.tracks.length; i < len; i++) {
          if($scope.playlist.tracks[i].id === trackId) {
            $scope.changeTrack(i);
            $scope.wydPlayer.play();
            break;
          }
        }
      }
    };
    
    // $scope.wydPlayer.play();
  }]);
