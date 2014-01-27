'use strict';

describe('Filter: prependZero', function () {

  // load the filter's module
  beforeEach(module('whosyourdaddythebandApp'));

  // initialize a new instance of the filter before each test
  var prependZero;
  beforeEach(inject(function ($filter) {
    prependZero = $filter('prependZero');
  }));

  // it('should return the input prefixed with "prependZero filter:"', function () {
    // var text = 'angularjs';
    // expect(prependZero(text)).toBe('prependZero filter: ' + text);
  // });

});
