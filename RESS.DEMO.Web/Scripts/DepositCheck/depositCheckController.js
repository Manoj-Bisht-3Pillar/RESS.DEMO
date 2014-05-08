'use strict';

/* Controllers */

var checkDepositControllers = angular.module('checkDepositControllers', []);
checkDepositControllers.controller('checkDepositControllers', ['$scope', 'alertService', function ($scope, alertService) {
    $scope.default_cheque_number = "123456";
    $scope.alerts = alertService.alerts;
    $scope.validate_cheque = function (customer) {
        if ($scope.default_cheque_number != customer.ChequeNumber) {
            alertService.errorEvent("Check number incorrect");
        }
        else {
            alertService.successEvent("Check Number is Correct");
        };


    };
}]);
