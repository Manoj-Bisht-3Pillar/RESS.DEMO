'use strict';

/* Controllers */

var checkBalanceControllers = angular.module('checkBalanceControllers', []);
checkBalanceControllers.controller('checkBalanceControllers', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $scope.showBalance = function () {
        //$http.get('phones/accounts.json').success(function (data) {
        //    $scope.userdetails = data;
        //});

        $http({
            method: 'GET', url: 'http://localhost:24434/api/values/' + $rootScope.client,
        }).success(function (data) {
            $scope.userdetails = data;
            console.log($scope.userdetails);
        }).error(function (data) {
            console.log("here");
        })
    };
}]);
