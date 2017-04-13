app.controller("AccountController", ['$scope', 'AccountService', function ($scope, AccountService) {
    $scope.message = "AccountController Active";
    $scope.login = function () {
        //console.log($scope.login.email + $scope.login.password);
        AccountService.checkLogin($scope.login);
    };
    $scope.register = function () {
        //console.log($scope.register.username + $scope.register.email + $scope.register.password + $scope.register.bankaccount);
        AccountService.saveUser($scope.register);
    };
}]);