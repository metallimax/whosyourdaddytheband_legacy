'use strict';

angular.module('whosyourdaddythebandApp')
  .directive('splash', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the splash directive' + attrs);
      }
    };
  });
