'use strict';

/* jasmine specs for services go here */

describe('mycheckbalance service test', function () {
    
    var scope, Restangular;
    beforeEach(angular.mock.module('FISApp'));

    beforeEach(angular.mock.inject(function ($rootScope, $controller, $injector) {
        scope = $rootScope.$new();
        $controller('checkBalanceControllers', {
            $scope: scope
        });
    }));

    beforeEach(angular.mock.module('checkBalanceService'));
    console.log(getUserDetails);
    it('should inject restangular', inject(function (Restangular) {
        expect(Restangular).toBeDefined();
    }));


});



