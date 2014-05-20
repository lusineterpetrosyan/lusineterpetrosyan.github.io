'use strict';

// Declare app level module which depends on filters, and services

var angularModuls = angular.module('Lusine', [
  'my-directives'
])/*.
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'index',
      controller: 'IndexCtrl'
    }).
    when('/about', {
      templateUrl: 'partials/_about',
      controller: 'AboutCtrl'
    }).
    when('/contacts', {
      templateUrl: 'partials/_contact',
      controller: 'ContactCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});*/