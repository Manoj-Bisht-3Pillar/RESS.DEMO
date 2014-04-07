'use strict';

var checkBalanceDirective = angular.module('checkBalanceDirective', []);

checkBalanceDirective.directive('checkBalance', function ($rootScope) {
    return {
        restrict: 'AE',
        transclude: true,
        scope: {
            eventHandler: '&ngClick'
        },
        link: function(scope, element, attrs) {
            scope.getContentUrl = function () {
                return 'home/checkbalance/' + $rootScope.client + '/' + $rootScope.language;
            }
        },
        template: '<div ng-include="getContentUrl()"></div>',
        controller: 'checkBalanceControllers',
    };

});