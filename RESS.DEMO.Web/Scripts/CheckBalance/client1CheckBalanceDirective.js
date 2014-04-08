'use strict';

var client1CheckBalanceDirective = angular.module('client1CheckBalanceDirective', []);

client1CheckBalanceDirective.directive('client1Checkbalance', function () {
    return {
        restrict: 'AE',
        transclude: true,
        scope: {
            eventHandler: '&ngClick'
        },
        templateUrl: 'Account/CheckBalance',
        controller: 'checkBalanceControllers',
    };

});