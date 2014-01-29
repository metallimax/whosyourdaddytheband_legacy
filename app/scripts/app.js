'use strict';

angular.module('controllers', []);
angular.module('filters', []);
angular.module('directives', []);

angular.module('whosyourdaddythebandApp', [
  'ngCookies',
  'ngRoute',
  'ui.filters',
  'controllers',
  'filters',
  'directives'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/audio', {
        templateUrl: 'views/audio.html',
        controller: 'AudioCtrl'
      })
      .when('/video', {
        templateUrl: 'views/video.html',
        controller: 'VideoCtrl'
      })
      .when('/the-band', {
        templateUrl: 'views/the-band.html',
        controller: 'TheBandCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/drinks', {
        templateUrl: 'views/drinks.html',
        controller: 'DrinksCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
