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
  'giftManagerDirective',
  'errorLogService',
  'stacktraceService',
  'loggingService',
  'applicationLoggingService'
]);

FISApp.config(['$routeProvider',
  function ($routeProvider) {
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
.config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:24434/api/');
    RestangularProvider.setRestangularFields({ clientId: '_id' });

})
.config(['$httpProvider', function($httpProvider) {
    /**
     * this interceptor uses the application logging service to
     * log server-side any errors from $http requests
     */
    $httpProvider.responseInterceptors.push([
        '$rootScope', '$q', '$injector', '$location', 'loggingService',
        function ($rootScope, $q, $injector, $location, loggingService) {
            return function(promise){
                return promise.then(function(response){
                    // http on success
                    return response;
                }, function (response) {
                    if(response.status === null || response.status === 500) {
                        var error = {
                            method: response.config.method,
                            url: response.config.url,
                            message: response.data,
                            status: response.status
                                    };
                        loggingService.error(JSON.stringify(error));
                    }
                    return $q.reject(response);
                });
            };
        }
    ]);
}]);
FISApp.provider("$exceptionHandler",{$get: function (errorLogService) {
    return (errorLogService);}
});
