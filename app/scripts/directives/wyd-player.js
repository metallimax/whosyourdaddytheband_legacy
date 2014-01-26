'use strict';

angular.module('whosyourdaddythebandApp')
  .directive('wydPlayer', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the wydPlayer directive');
      }
    };
  });
