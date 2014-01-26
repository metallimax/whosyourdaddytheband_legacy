'use strict';

angular.module('filters')
  .filter('prependZero', function () {
    return function (input, limit) {
      if(limit == null) {
        limit = 99;
      }
      
      var acc = 10;
      var prepend = "";
      
      while(acc <= limit) {
        prepend += "0";
        acc *= 10;
      }
      
      return prepend + input;
    };
  });
