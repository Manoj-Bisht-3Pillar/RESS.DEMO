'use strict';

var checkBalanceService = angular.module('checkBalanceService', []);

checkBalanceService.factory("getUserDetails", ['$resource', function ($resource) {
    var _getData = $resource('http://localhost:24434/api/values/:clientID');
    return {
        getData: _getData
    }
}]);