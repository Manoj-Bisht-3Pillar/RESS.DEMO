'use strict'

var giftManagerDirective = angular.module('giftManagerDirective', []);

giftManagerDirective.directive('giftCard', function () {

    return {
        restrict: 'AE',
        transclude: true,
        scope: {
            eventHandler: '&ngClick'
        },
        templateUrl: 'Home/GiftCard',
        //controller: 'PhoneListCtrl2',
    };

});