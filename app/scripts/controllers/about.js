'use strict';

angular.module('controllers')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.tools = [
      { name: 'Yeaoman', url: '', img: '' },
      { name: 'Grunt', url: '', img: '' },
      { name: 'Bowser', url: '', img: '' },
      { name: 'AngularJS', url: '', img: '' }
    ];
    
    $scope.authors = [
      {name: 'Max', email: 'maxime.delrieu@gmail.com'}
    ];
  }]);
