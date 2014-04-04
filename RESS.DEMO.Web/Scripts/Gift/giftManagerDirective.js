'use strict'

var checkBalanceDirective = angular.module('checkBalanceDirective', []);

checkBalanceDirective.directive('checkBalanceDirective', function () {

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