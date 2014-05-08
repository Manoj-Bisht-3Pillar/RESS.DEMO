'use strict'

var depositCheckDirective = angular.module('depositCheckDirective', []);

depositCheckDirective.directive('depositCheck', function () {

    return {
        restrict: 'E',
        scope: {
            eventHandler: '&ngClick'
        },
        templateUrl: 'Home/DepositCheck',
        controller: 'checkDepositControllers',
    };

});