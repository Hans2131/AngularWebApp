describe('AccountController', function () {
    beforeEach(module('webtopay'));

    var $controller;
    var $scope = {};

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
        controller = $controller('AccountController', { $scope: $scope });
    }));

    describe('$scope.register', function () {
        it('creates an account with user registration info', function () {
            $scope.register = {
                username: "Test",
                email: "test@mail.com",
                password: "passtest",
                backaccount: "12345",
                saldo: 0
            };
            $scope.registerUser();
            expect($scope.registrationMessage).toEqual("Registreren is gelukt!");
        });

        it('cant create an account with email that already exists', function () {
            $scope.register = {
                username: "Test",
                email: "test@mail.com",
                password: "passtest",
                backaccount: "12345",
                saldo: 0
            };
            $scope.registerUser();
            expect($scope.registrationMessage).toEqual("Email bestaat al!");
        });
    });

    describe('$scope.login', function () {
        it('login should set currentuser', function () {
            $scope.login.email = "test@mail.com";
            $scope.login.password = "passtest";

            $scope.login();
            expect($scope.isLoggedIn).toEqual(true);
            expect($scope.currentUser.username).toEqual("Test");
            expect($scope.currentUser.email).toEqual("test@mail.com");
        });

        it('logout should set currentuser null', function () {
            $scope.logout();

            expect($scope.isLoggedIn).toEqual(false);
            expect($scope.currentUser).toEqual(null);            
        });

        it('login with wrong email should fail', function () {
            $scope.login.email = "test123@mail.com";
            $scope.login.password = "passtest";

            $scope.login();

            expect($scope.isLoggedIn).toEqual(false);
            expect($scope.currentUser).toEqual(null);            
        });
    });

    describe('$scope.addMoney', function () {
        it('add money should add 10 euros to the current account', function () {
            $scope.login.email = "test@mail.com";
            $scope.login.password = "passtest";
            $scope.login();

            $scope.addMoney();
            $scope.addMoney();

            expect($scope.currentUser.saldo).toEqual(20);
        });
    });
});