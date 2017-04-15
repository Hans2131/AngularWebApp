app.filter('myEvenements', function () {
  return function (evenements, myEmail, useFilter) {
    if(!useFilter){
        return evenements;
    }

    var filtered = [];
    
    angular.forEach(evenements, function(evenement) {
        if(evenement.owner == myEmail){
            filtered.push(evenement);
        }
    });

    return filtered;
  };
});