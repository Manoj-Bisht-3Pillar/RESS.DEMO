'use strict';

var alertDirective = angular.module('alertDirective', []);

alertDirective.directive('alertDirective', function () {
    return {
        restrict: 'E',
        compile: function(element, attrs){
            var tag = '<div ng-repeat="(key,val) in alerts" class="alert {{key}}">' +
                        '<h1>hello world</h1>' +
                      '</div>';
            element.append(tag);
        },
        controllers: 'checkDepositControllers'
    }
})