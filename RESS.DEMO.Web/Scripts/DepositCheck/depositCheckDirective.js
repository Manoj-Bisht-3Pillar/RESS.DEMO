'use strict'

var depositCheckDirective = angular.module('depositCheckDirective', []);

depositCheckDirective.directive('checkBalanceDirective', function () {

    return {
        restrict: 'AE',
        transclude: true,
        scope: {
            eventHandler: '&ngClick'
        },
        templateUrl: 'Home/CheckBalance',
        controller: 'PhoneListCtrl2',
    };

});