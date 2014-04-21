'use strict';

var checkBalanceService = angular.module('checkBalanceService', []);

checkBalanceService.factory("getUserDetails", ['$rootScope', 'Restangular', function ($rootScope, Restangular) {

    var _userData = Restangular.one('values', $rootScope.client).get().then(function (user) {
        return user;
    });
    return {
        userData: _userData
    }
}]);