var phonecatDirective = angular.module('phonecatDirective', []);

phonecatDirective.directive('blogSearch', function ($rootScope) {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'partials/blog-search.html'
    };
});

phonecatDirective.directive('blogHeaderList', function ($rootScope) {

    return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'partials/blog-header-strip.html'

    };
});

phonecatDirective.directive('checkBalance', function () {

    return {
        restrict: 'AE',
        transclude: true,
        scope: {
            eventHandler: '&ngClick'
        },      
        templateUrl: 'Account/CheckBalance',
        controller: 'PhoneListCtrl2',
    };
    
});
