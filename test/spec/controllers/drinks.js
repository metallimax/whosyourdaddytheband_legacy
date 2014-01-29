'use strict';

describe('Controller: DrinksCtrl', function () {

  // load the controller's module
  beforeEach(module('whosyourdaddythebandApp'));

  var DrinksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DrinksCtrl = $controller('DrinksCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
    // expect(scope.awesomeThings.length).toBe(3);
  // });
});
