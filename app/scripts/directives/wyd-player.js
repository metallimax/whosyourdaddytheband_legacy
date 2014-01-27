'use strict';

angular.module('directives')
  .directive('wydPlayer', function () {
    return {
      template: [
        '<div class="wyd-player" ng-controller="WydPlayerCtrl">',
        '<a class="wyd-player-command" ng-click="wydPlayer.previous()">z</a>',
        '<a class="wyd-player-command" ng-show="wydPlayerAudio.paused" ng-click="wydPlayer.play()">u</a>',
        '<a class="wyd-player-command" ng-show="!wydPlayerAudio.paused" ng-click="wydPlayer.pause()">x</a>',
        '<a class="wyd-player-command" ng-click="wydPlayer.next()">{</a>',
        '<a class="wyd-player-command" ng-click="wydPlayer.volume()">y</a>',
        '<a class="wyd-player-command" ng-click="wydPlayer.list()">}</a>',
        // '<audio id="wyd-audioplayer" controls="controls" src="http://dl.dropbox.com/u/33531527/whosyourdaddytheband/Audio/Compos/hester_mofet.mp3">',
        '<audio id="wyd-audioplayer" controls="controls">',
        'Your browser does not support the audio element.',
        '</audio>',
        '<span class="wyd-player-title">{{ playlist.currentTitle }}</span>',
        '<div class="progress"><div class="progress-buffered" style="width: {{buffered}}%;"><div class="progress-elapsed" style="width: {{elapsed}}%;"></div></div></div>',
        '</div>'
      ].join(''),
      restrict: 'E'
      // ,
      // link: function postLink(scope, element, attrs) {
        // element.text('this is the wydPlayer directive');
      // }
    };
  });
