'use strict';

var checkBalanceService = angular.module('checkBalanceService', []);

checkBalanceService.factory("getUserDetails", ['$rootScope', 'Restangular', function ($rootScope, Restangular) {

    var _userData = Restangular.one('values', $rootScope.client).get().then(function (user) {
        var _getData = Restangular.one("http://localhost:49723/Scripts/error.json").get().then(function (data) {
            console.log("abc")
            return data;

        });
        return user;

    });
    var _getData = Restangular.one("Scripts/error.json").get().then(function (user) {
        return user;

    });
    var _test = "lalit";
    return {
        test: _test,
        userData: _userData
    }
}]);