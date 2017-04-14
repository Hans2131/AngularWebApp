app.controller("AccountController", ['$scope', 'AccountService', '$window', function ($scope, AccountService, $window) {
    $scope.message = "AccountController Active";
    $scope.isLoggedIn = false;
    $scope.login = function () {
        //console.log($scope.login.email + $scope.login.password);
        var loginInfo = Object.assign({}, $scope.login);

        $scope.currentUser = AccountService.checkLogin(loginInfo);

        if($scope.currentUser != null){
            $scope.isLoggedIn = true;
            $window.location.href = '#/account';
            console.log(JSON.stringify($scope.currentUser));
        }

    };

    $scope.register = function () {
        //console.log($scope.register.username + $scope.register.email + $scope.register.password + $scope.register.bankaccount);
        var registerData = Object.assign({}, $scope.register);

        AccountService.saveUser(registerData);
    };

    $scope.logout = function () {
        $scope.isLoggedIn = false;
        $window.location.href = '#/register';
    };
}]);