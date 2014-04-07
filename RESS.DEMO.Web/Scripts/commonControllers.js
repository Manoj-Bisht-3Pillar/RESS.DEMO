'use strict';

/* Controllers */

var commonControllers = angular.module('commonControllers', []);

commonControllers.controller('commonControllers', ['$scope', '$rootScope', '$routeParams', function ($scope, $rootScope, $routeParams) {
    $rootScope.language = "en";
    $rootScope.client = "1";
    $rootScope.client = $routeParams.client;
    $rootScope.language = $routeParams.language;
   }]);
