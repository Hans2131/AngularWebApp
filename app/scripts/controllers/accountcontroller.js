app.controller("AccountController", ['$scope', 'AccountService', '$window', function ($scope, AccountService, $window) {
    $scope.message = "AccountController Active";
    $scope.isLoggedIn = false;
    $scope.login = function () {
        //console.log($scope.login.email + $scope.login.password);
        var loginInfo = Object.assign({}, $scope.login);

        $scope.currentUser = AccountService.checkLogin(loginInfo);

        if ($scope.currentUser != null) {
            $scope.isLoggedIn = true;
            $window.location.href = '#/account';
            console.log(JSON.stringify($scope.currentUser));
        }
        $scope.message = "logged in";
    };

    $scope.register = function () {
        var registerData = Object.assign({}, $scope.register);
        registerData.saldo = 0.0;

        AccountService.saveUser(registerData);
    };

    $scope.logout = function () {
        AccountService.logOut();
        $scope.isLoggedIn = false;
        $window.location.href = '#/register';
    };

    $scope.addMoney = function () {
        var amount = 10;
        AccountService.addMoney(amount);
        $scope.currentUser = AccountService.getCurrentUser();
    }

    $scope.checkIfRedirect = function () {
        if ($scope.currentUser != null) {
            $window.location.href = '#/account';
        }
    }

    $scope.init = function () {
        $scope.currentUser = AccountService.getCurrentUser();

        if ($scope.currentUser != null) {
            $scope.isLoggedIn = true;
        }
    };

    $scope.init();
}]);