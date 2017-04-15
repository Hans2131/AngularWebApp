app.service("EvenementService", function () {
    this.saveEvenement = function (newEvenement) {
        var evenements = localStorage.getItem('evenements');

        if (evenements != null) {
            evenements = JSON.parse(evenements);
        } else {
            evenements = [];
        }

        newEvenement.index = evenements.length;
        evenements.push(newEvenement);
        localStorage.setItem('evenements', JSON.stringify(evenements));

        var test = localStorage.getItem('evenements');
        console.log(test);
    };

    this.getEvenements = function () {
        var evenements = localStorage.getItem('evenements');
        evenements = JSON.parse(evenements);

        return evenements;
    }

    this.setCurrentEvenement = function (index) {
        localStorage.setItem('currentEvenement', index);
    }

    this.getCurrentEvenement = function () {
        return localStorage.getItem('currentEvenement');
    }

    this.updateEvenement = function (evenement) {
        var evenements = localStorage.getItem('evenements');
        evenements = JSON.parse(evenements);

        evenements[evenement.index] = evenement;

        localStorage.setItem('evenements', JSON.stringify(evenements));
        localStorage.removeItem('currentEvenement');
    }

    this.removeCurrentEvenement = function () {
        localStorage.removeItem('currentEvenement');
    }
});