app.controller("EvenementsController", function($scope) {
    $scope.message = "EvenementsController Active"
    $scope.mineClick = function(){
        $scope.gold += 100;
    };
});