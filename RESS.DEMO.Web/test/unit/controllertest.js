'use strict';

/* jasmine specs for controllers go here */
describe('MyController', function () {
    //Declaration of variables that will be used in this description
    var scope, httpBackend; 

    //Mocking our application to test and allow us to inject application dependencies here.
    beforeEach(angular.mock.module('FISApp'));

    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function ($rootScope, $controller, _$httpBackend_) {
        
        //Create an empty Scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope.
        $controller('checkBalanceControllers', {
            $scope: scope
        });

        httpBackend = _$httpBackend_;
        httpBackend.when('GET', 'http://localhost:24434/api/values/:clientID').respond({ clientID: '1' });
    }));

    it('should have variable text = "Hello World!"', function(){
        expect(scope.text).toBe('Hello World!');
    });

    it('should fetch list of users', function () {
        scope.showBalance;

        console.log(scope);
    });
});

