app.service("EvenementService", function () {
    this.saveEvenement = function (newEvenement) {
        var evenements = localStorage.getItem('evenements');

        if (evenements != null) {
            evenements = JSON.parse(evenements);
        } else {
            evenements = [];
        }

        newEvenement.index = evenements.length;
        newEvenement.debtLeft = newEvenement.debt;
        evenements.push(newEvenement);
        localStorage.setItem('evenements', JSON.stringify(evenements));
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

        evenement.debtLeft = evenement.debt;
        evenements[evenement.index] = evenement;

        localStorage.setItem('evenements', JSON.stringify(evenements));
        localStorage.removeItem('currentEvenement');
    }

    this.removeCurrentEvenement = function () {
        localStorage.removeItem('currentEvenement');
    }

    this.takePart = function (evenement, currentUser) {
        var participations = localStorage.getItem('participations');

        if (participations != null) {
            participations = JSON.parse(participations);
        } else {
            participations = [];
        }

        var newParticipation = {};
        newParticipation.index = participations.length;
        newParticipation.evenementIndex = evenement.index;
        newParticipation.user = currentUser.email;
        newParticipation.hasPayed = false;
        participations.push(newParticipation);
        localStorage.setItem('participations', JSON.stringify(participations));
    }

    this.getParticipants = function (currentEvenement) {
        var participations = localStorage.getItem('participations');
        participations = JSON.parse(participations);

        var participants = [];
        angular.forEach(participations, function (participation) {
            if (participation.evenementIndex == currentEvenement.index) {
                var participant = {};
                participant.index = participants.length;
                participant.user = participation.user;
                participant.hasPayed = participation.hasPayed;
                participants.push(participant);
            }
        });

        return participants;
    }

    this.pay = function (evenement, currentUser, amount) {
        var participations = localStorage.getItem('participations');
        participations = JSON.parse(participations);

        angular.forEach(participations, function (participation) {
            if (participation.evenementIndex == evenement.index && participation.user == currentUser.email) {
                participation.hasPayed = true;
            }
        });
        localStorage.setItem('participations', JSON.stringify(participations));

        var evenements = localStorage.getItem('evenements');
        evenements = JSON.parse(evenements);

        angular.forEach(evenements, function (e) {
            if (e.index == evenement.index) {
                e.debtLeft = e.debtLeft - amount;
            }
        });

        localStorage.setItem('evenements', JSON.stringify(evenements));
    }
});