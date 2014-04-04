'use strict';

/* Controllers */

var checkBalanceControllers = angular.module('checkBalanceControllers', []);
checkBalanceControllers.controller('checkBalanceControllers', ['$scope', '$http', function ($scope, $http) {
    $scope.showBalance = function () {
        $http.get('phones/accounts.json').success(function (data) {
            $scope.userdetails = data;
        });
    };
}]);
