'use strict'

var depositCheckDirective = angular.module('depositCheckDirective', []);

depositCheckDirective.directive('depositCheck', function () {

    return {
        restrict: 'AE',
        transclude: true,
        scope: {
            eventHandler: '&ngClick'
        },
        templateUrl: 'Home/DepositCheck',
    };

});