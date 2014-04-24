'use strict';

/* jasmine specs for controllers go here */
describe('MyController', function () {
  
    var scope, httpBackend;
    beforeEach(module('FISApp'));

    beforeEach(angular.mock.inject(function ($rootScope, $controller, $injector) {
        scope = $rootScope.$new();
        $controller('checkBalanceControllers', {
            $scope: scope
        });
    }));

    it('should have variable text = "Hello World!"', function(){
        expect(scope.text).toBe('Hello World!');
        console.log(scope.showBalance());
        scope.showBalance().then(function (data) {
            //console.log("here")
        })
        //console.log("here")
    });
    
    //beforeEach(module('checkBalanceControllers'));
    //it('returns data', inject(function (checkBalanceControllers) {
    //    console.log(checkBalanceControllers);
    //}));


});

