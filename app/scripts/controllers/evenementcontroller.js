app.controller("EvenementController", ['$scope', 'AccountService', '$window', 'EvenementService', function ($scope, AccountService, $window, EvenementService) {
    $scope.search = "";
    $scope.onlyMyEvenements = false;
    $scope.startCreate = function () {
        EvenementService.removeCurrentEvenement();
        $window.location.href = '#/createevenement';
    }

    $scope.create = function () {
        var newEvenement = Object.assign({}, $scope.evenement);
        newEvenement.owner = $scope.currentUser.email;

        EvenementService.saveEvenement(newEvenement);
        $scope.evenements = EvenementService.getEvenements();

        $window.location.href = '#/evenements';
    }

    $scope.startUpdate = function (index) {
        EvenementService.setCurrentEvenement(index);
        $window.location.href = '#/createevenement';
    }

    $scope.update = function () {
        EvenementService.updateEvenement($scope.evenement);
        $window.location.href = '#/evenements';
    }

    $scope.open = function (index) {
        EvenementService.setCurrentEvenement(index);
        $window.location.href = '#/evenement';
    }

    $scope.isOwner = function (index) {
        return $scope.evenements[index].owner == $scope.currentUser.email;
    }

    $scope.isUpdating = function (index) {
        return $scope.currentEvenement != null;
    }

    $scope.takePart = function () {
        EvenementService.takePart($scope.evenement, $scope.currentUser);
        $scope.evenement.participants = $scope.getParticipants();
    }

    $scope.isPartTaker = function () {
        var result = false
        angular.forEach($scope.evenement.participants, function (participant) {
            if (participant.user.email == $scope.currentUser.email) {
                result = true;
            }
        });

        return result;
    }

    $scope.getParticipants = function () {
        var participants = EvenementService.getParticipants($scope.evenement);
        return AccountService.getUserInfoParticipants(participants);  
    }

    $scope.pay = function () {
        var amount = $scope.evenement.debt / $scope.evenement.amountOfParticipants;
        AccountService.moneyExchange($scope.currentUser.email, $scope.evenement.owner, amount);
        EvenementService.pay($scope.evenement, $scope.currentUser, amount);

        $scope.evenements = EvenementService.getEvenements();
        $scope.evenement = $scope.evenements[$scope.currentEvenement];
        $scope.evenement.participants = $scope.getParticipants();
    }

    $scope.hasPayed = function () {
        var result = false
        angular.forEach($scope.evenement.participants, function (participant) {
            if (participant.user.email == $scope.currentUser.email) {
                result = participant.hasPayed;
            }
        });

        return result;
    }

    $scope.init = function () {
        $scope.evenements = EvenementService.getEvenements();
        $scope.currentUser = AccountService.getCurrentUser();
        $scope.currentEvenement = EvenementService.getCurrentEvenement();

        if ($scope.currentEvenement != null) {
            $scope.evenement = $scope.evenements[$scope.currentEvenement];
            $scope.evenement.participants = $scope.getParticipants();
        }
    }

    $scope.init();
}]);