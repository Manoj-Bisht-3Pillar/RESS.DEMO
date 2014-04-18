'use strict';

var checkBalanceService = angular.module('checkBalanceService', []);

checkBalanceService.factory("getUserDetails", ['$resource', '$rootScope', function ($resource, $rootScope) {
    var _getData = $resource('http://localhost:24434/api/values/:clientID');
    var _userData = _getData.get({ clientID: $rootScope.client }).$promise.then(function (data) {
        return data;
    });
    return {
        userData: _userData
    }
}]);