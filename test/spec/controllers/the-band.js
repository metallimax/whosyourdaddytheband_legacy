'use strict';

describe('Controller: TheBandCtrl', function () {

  // load the controller's module
  beforeEach(module('whosyourdaddythebandApp'));

  var TheBandCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TheBandCtrl = $controller('TheBandCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
    // expect(scope.awesomeThings.length).toBe(3);
  // });
});
