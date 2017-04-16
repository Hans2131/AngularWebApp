describe('AccountController', function () {
    beforeEach(module('webtopay'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('$scope.register', function () {
        var $scope, controller;

        beforeEach(function () {
            $scope = {};
            controller = $controller('AccountController', { $scope: $scope });
        });

        it('creates an account with user registration info', function () {
            $scope.register = {
                username: "Test",
                email: "test@mail.com",
                password: "passtest",
                backaccount: "12345",
                saldo: 0
            };
            $scope.registerUser();
            expect($scope.registrationMessage).toEqual("Registreren is gelukt");
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
});