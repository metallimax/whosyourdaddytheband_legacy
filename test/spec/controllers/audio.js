'use strict';

describe('Controller: AudioCtrl', function () {

  // load the controller's module
  beforeEach(module('whosyourdaddythebandApp'));

  var AudioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AudioCtrl = $controller('AudioCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
    // expect(scope.awesomeThings.length).toBe(3);
  // });
});
