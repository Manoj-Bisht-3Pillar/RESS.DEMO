'use strict';

/* App Module */
var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'ngResource',
  'phonecatAnimations',
  'commonControllers',
  'checkBalanceControllers',
  'checkBalanceDirective',
  'checkBalanceService',
  'depositCheckDirective',
  'giftManagerDirective'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Homes/:client/:language', {
        templateUrl: 'Home/Index',
        controller: 'commonControllers'
      }).
      when('/phones/:phoneId', {
          templateUrl: 'partials/DepositCheck',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
          redirectTo: '/Homes/1/en'
      });
  }]);
