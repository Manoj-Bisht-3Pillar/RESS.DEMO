'use strict';

/* jasmine specs for controllers go here */
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

//describe('MyController', function () {
//    var scope;
//    var ParseServiceMock;
//    beforeEach(angular.mock.module('FISApp'));

//    beforeEach(function () {
//        ParseServiceMock = {
//            showBalance: function () { }
//        };
//    });
//    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
//        scope = $rootScope.$new();
//        $controller('checkBalanceControllers', {
//            $scope: scope,
//            get: ParseServiceMock
//        });
        
//    }));
    
    
//    it("should check for the data to be true", function () {
//        expect(scope.test).toBe('Hello World!');
//    });

//    it("should test for the data to be correct", function () {
//        spyOn(ParseServiceMock, 'showBalance').andCallThrough();
//        scope.showBalance;
//        expect(ParseServiceMock.registerBook).toHaveBeenCalled();
//    });

//});


//describe('PhoneCat controllers', function() {

//  beforeEach(function(){
//    this.addMatchers({
//      toEqualData: function(expected) {
//        return angular.equals(this.actual, expected);
//      }
//    });
//  });

//  beforeEach(module('phonecatApp'));
//  beforeEach(module('phonecatServices'));

//  describe('PhoneListCtrl', function(){
//    var scope, ctrl, $httpBackend;

//    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
//      $httpBackend = _$httpBackend_;
//      $httpBackend.expectGET('phones/phones.json').
//          respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

//      scope = $rootScope.$new();
//      ctrl = $controller('PhoneListCtrl', {$scope: scope});
//    }));


//    it('should create "phones" model with 2 phones fetched from xhr', function() {
//      expect(scope.phones).toEqualData([]);
//      $httpBackend.flush();

//      expect(scope.phones).toEqualData(
//          [{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
//    });


//    it('should set the default value of orderProp model', function() {
//      expect(scope.orderProp).toBe('age');
//    });
//  });


//  describe('PhoneDetailCtrl', function(){
//    var scope, $httpBackend, ctrl,
//        xyzPhoneData = function() {
//          return {
//            name: 'phone xyz',
//                images: ['image/url1.png', 'image/url2.png']
//          }
//        };


//    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
//      $httpBackend = _$httpBackend_;
//      $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());

//      $routeParams.phoneId = 'xyz';
//      scope = $rootScope.$new();
//      ctrl = $controller('PhoneDetailCtrl', {$scope: scope});
//    }));


//    it('should fetch phone detail', function() {
//      expect(scope.phone).toEqualData({});
//      $httpBackend.flush();

//      expect(scope.phone).toEqualData(xyzPhoneData());
//    });
//  });
//});
