'use strict';

angular.module('controllers')
  .controller('GlobalCtrl', ['$scope', '$route', function ($scope, $route) {
    $scope.$on('$routeChangeSuccess', function() {
      $scope.route = $route.current.$$route.originalPath;
    });
  }]);
