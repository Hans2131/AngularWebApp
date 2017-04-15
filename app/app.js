var app = angular.module('webtopay', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider
    .when("/account", {
        templateUrl : "views/account.html",
        controller: "AccountController"
    })
    .when("/evenements", {
        templateUrl : "views/evenements.html",
        controller: "EvenementController"
    })
    .when("/createevenement", {
        templateUrl : "views/createevenement.html",
        controller: "EvenementController"
    })
    .when("/evenement", {
        templateUrl : "views/evenement.html",
        controller: "EvenementController"
    })
    .when("/register", {
        templateUrl : "views/register.html",
        controller: "AccountController"
    })
    .otherwise({
        redirectTo: "/register"
    });
});