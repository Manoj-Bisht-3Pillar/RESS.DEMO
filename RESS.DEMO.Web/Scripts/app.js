'use strict';

/* App Module */
var FISApp = angular.module('FISApp', [
  'ngRoute',
  'ngResource',//Need to remove once completely shifted to restangular
  'restangular',
  'commonControllers',
  'checkBalanceControllers',
  'checkBalanceDirective',
  'checkBalanceService',
  'depositCheckDirective',
  'giftManagerDirective'
]);

FISApp.config(['$routeProvider',
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
  }])
.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:24434/api/');
    RestangularProvider.setRestangularFields({ clientId: '_id' });

})
