var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(function($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider

        when('/register', {
            templateUrl: 'views/register.html', controller: 'RegisterController'
        }).

        when('/home', {
            templateUrl: 'views/resources.html', controller: 'ResourcesController'
        }).

        otherwise({
            redirectTo: '/home'
        });

});

mainApp.controller('RegisterController', function ($scope) {
    $scope.message = "This page will be used to register a player";
});

mainApp.controller('ResourcesController', function ($scope) {
    $scope.message = "This page will be to generate resources";
});