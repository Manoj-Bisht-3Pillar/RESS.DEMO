'use strict';

/* Controllers */

var checkBalanceControllers = angular.module('checkBalanceControllers', []);
checkBalanceControllers.controller('checkBalanceControllers', ['$scope', '$http', '$rootScope', 'getUserDetails', function ($scope, $http, $rootScope, getUserDetails) {
    $scope.showBalance = function () {
        getUserDetails.getData.get({ clientID: $rootScope.client }).$promise.then(function (data) {
            $scope.userdetails = data;
        });
    };
}]);

