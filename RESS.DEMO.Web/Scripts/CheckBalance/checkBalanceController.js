'use strict';

var checkBalanceControllers = angular.module('checkBalanceControllers', []);
checkBalanceControllers.controller('checkBalanceControllers', ['$scope', '$http', '$rootScope', 'getUserDetails', function ($scope, $http, $rootScope, getUserDetails) {
    
    $scope.text = "Hello World!";
    $scope.showBalance = function () {
        getUserDetails.userData.then(function (data) {
            $scope.userdetails = data;
        });
    };
}]);

