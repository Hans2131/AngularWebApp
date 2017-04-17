describe('EvenementController', function () {
    beforeEach(module('webtopay'));

    var $controller;
    var $scope = {};

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
        controller = $controller('EvenementController', { $scope: $scope });
    }));

    describe('$scope.create', function () {
        it('creates an evenement with filled in evenement info', function () {
            $scope.evenement = {
                name: "TestEvenement",
                debt: 25.0,
                amountOfParticipants: 5,
                description: "testdescription",
            };
            $scope.create();
            expect($scope.evenements[0].name).toEqual("TestEvenement");
        });

        it('updates an evenement with filled in evenement info', function () {
            $scope.startUpdate(0);
            $scope.init();
            $scope.evenement.name = "ChangedName";
            $scope.update();

            expect($scope.evenements[0].name).toEqual("ChangedName");
        });
    });
});