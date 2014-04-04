'use strict';

/* App Module */
var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'commonControllers',
  'checkBalanceControllers',
  'checkBalanceDirective',
  'phonecatFilters',
  'depositCheckDirective',
  'giftManagerDirective',
  'client1CheckBalanceDirective'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Homes/1/:language', {
        templateUrl: 'Home/HomeBody',
        controller: 'commonControllers'
      }).
      when('/phones/:phoneId', {
          templateUrl: 'partials/DepositCheck',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/Homes/1/:language'
      });
  }]);
