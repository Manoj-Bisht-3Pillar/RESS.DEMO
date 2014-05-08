'use strict';

var checkBalanceControllers = angular.module('checkBalanceControllers', []);
checkBalanceControllers.controller('checkBalanceControllers', ['$scope', '$http', '$rootScope', 'getUserDetails', 'applicationLoggingService', function ($scope, $http, $rootScope, getUserDetails, applicationLoggingService) {
    
    $scope.text = "Hello World!";
    $scope.showBalance = function () {
         return getUserDetails.userData.then(function (data) {
             $scope.userdetails = data;
             applicationLoggingService.info({
                 message: "retrieved data successfully",
             });
             return data;
        });
    };
}]);

