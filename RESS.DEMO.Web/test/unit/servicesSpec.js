'use strict';

/* jasmine specs for services go here */

describe('myService test', function () {
    describe('when I call checkBalanceService', function () {
        //var factory, factorythen, datathen = {"lalit":1};
        //beforeEach(function () {
        //    module('FISApp');
        //    module('checkBalanceService');
        //    inject(function (getUserDetails) {
        //        factory = getUserDetails;
        //    });
        //    factorythen = factory.userData.then(function (data) {
        //        console.log(factory.userData);
        //    });
        //});
        //it('should return three todo notes initially', function () {
        //    expect(factorythen).toBeDefined();
        //    factorythen.then(function (item) {
        //        console.log("here");
        //    })
        //});

        beforeEach(module('FISApp'));
        beforeEach(module('checkBalanceService'));
        var test;

        it('returns data', inject(function (getUserDetails) {
            getUserDetails.userData.then(function (data) {
                console.log("here");
            },
            function (error) {
                console.log('rejection');
            });
            console.log(getUserDetails.userData);
            console.log(getUserDetails.test);
        }));




    });
});



