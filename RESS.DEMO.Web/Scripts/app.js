'use strict';

/* App Module */
var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'checkBalanceControllers',
  'checkBalanceDirective',
  'phonecatFilters',
  'depositCheckDirective',
  'giftManagerDirective'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Homes', {
        templateUrl: 'Home/HomeBody',
        controller: 'checkBalanceControllers'
      }).
      when('/phones/:phoneId', {
          templateUrl: 'partials/DepositCheck',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/Homes'
      });
  }]);
