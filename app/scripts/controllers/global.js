'use strict';

angular.module('controllers')
  .controller('GlobalCtrl', ['$scope', '$route', function ($scope, $route) {
    // $scope.current = $route.current.$$route.originalPath;
    // $log.info($route);
    // $log.info($scope.current);
    $scope.$on('$routeChangeSuccess', function() {
      $scope.route = $route.current.$$route.originalPath;
    });
  }]);
