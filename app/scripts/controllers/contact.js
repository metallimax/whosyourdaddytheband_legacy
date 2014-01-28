'use strict';

angular.module('controllers')
  .controller('ContactCtrl', ['$scope', function ($scope) {
    $scope.contact = {
      email: 'whosyourdaddytheband@gmail.com'
    };
  }]);
