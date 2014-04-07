'use strict';

/* Controllers */

var commonControllers = angular.module('commonControllers', []);

commonControllers.controller('commonControllers', ['$scope', '$rootScope', '$routeParams', '$route', '$compile', function ($scope, $rootScope, $routeParams, $route, $compile) {
    $rootScope.language = "en";
    $rootScope.client = "1";
    $rootScope.client = $routeParams.client;
    $rootScope.language = $routeParams.language;

    $route.current.templateUrl = 'Home/HomeBody/' + $routeParams.client;

    $.get($route.current.templateUrl, function (data) {
        $scope.$apply(function () {
            $('#views').html($compile(data)($scope));
        });
    });
   }]);
