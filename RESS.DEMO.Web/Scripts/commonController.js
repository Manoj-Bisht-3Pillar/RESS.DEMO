
function commonControllers($scope, $rootScope, $routeParams) {
    $rootScope.language = "en";
    $scope.changeLanguage = function(customLanguage) {
        $rootScope.language = customLanguage;
    }
}