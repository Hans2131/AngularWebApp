app.controller("EvenementController", ['$scope', 'AccountService', '$window', 'EvenementService', function ($scope, AccountService, $window, EvenementService) {
    $scope.message = "EvenementsController Active"
    $scope.startCreate = function () {
        EvenementService.removeCurrentEvenement();
        $window.location.href = '#/createevenement';
    };

    $scope.create = function () {
        var newEvenement = Object.assign({}, $scope.evenement);
        newEvenement.owner = $scope.currentUser.email;

        EvenementService.saveEvenement(newEvenement);
        $scope.evenements = EvenementService.getEvenements();

        $window.location.href = '#/evenements';
    };

    $scope.startUpdate = function (index) {
        EvenementService.setCurrentEvenement(index);
        $window.location.href = '#/createevenement';
    };

    $scope.update = function () {
        EvenementService.updateEvenement($scope.evenement);
        $window.location.href = '#/evenements';
    };

    $scope.open = function (index) {
        EvenementService.setCurrentEvenement(index);
        $window.location.href = '#/evenement';
    };

    $scope.isOwner = function (index) {
        return $scope.evenements[index].owner == $scope.currentUser.email;
    };

    $scope.isUpdating = function (index) {
        return $scope.currentEvenement != null;
    };

    

    $scope.init = function () {
        $scope.evenements = EvenementService.getEvenements();
        $scope.currentUser = AccountService.getCurrentUser();
        $scope.currentEvenement = EvenementService.getCurrentEvenement();

        if ($scope.currentEvenement != null) {
            $scope.evenement = $scope.evenements[$scope.currentEvenement];
        }
    };

    $scope.init();
}]);