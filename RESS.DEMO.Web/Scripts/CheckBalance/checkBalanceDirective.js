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
                alert($rootScope.language);
                return 'home/checkbalance//' + $rootScope.language;
            }
        },
        template: '<div ng-include="getContentUrl()"></div>',
        //templateUrl: 'Home/CheckBalance' + ,
        controller: 'checkBalanceControllers',
    };

});