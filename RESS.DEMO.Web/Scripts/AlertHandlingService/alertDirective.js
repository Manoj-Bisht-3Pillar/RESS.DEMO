'use strict';

var alertDirective = angular.module('alertDirective', []);

alertDirective.directive('alertDirective', function () {
    return {
        restrict: 'E',
        transclude: true,
        compile: function(element, attrs){
            var tag = '<div ng-repeat="(key,val) in alerts" class="alert {{key}}">' +
                        '<div ng-repeat="msg in val">{{msg}}</div>' +
                      '</div>';
            element.append(tag);
        },
        controllers: 'checkDepositControllers'
    }
})