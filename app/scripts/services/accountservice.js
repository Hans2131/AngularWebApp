app.service("AccountService", function () {
    this.saveUser = function (newUser) {
        var users = localStorage.getItem('userAccounts');

        if (users != null) {
            users = JSON.parse(users);
        } else {
            users = [];
        }

        newUser.index = users.length;
        users.push(newUser);
        localStorage.setItem('userAccounts', JSON.stringify(users));

        var test = localStorage.getItem('userAccounts');
        console.log(test);
    };

    this.checkIfAccountExists = function (email) {
        var users = localStorage.getItem('userAccounts');
        users = JSON.parse(users);

        var result = false;

        angular.forEach(users, function (user) {
            if (user.email == email) {
                result = true;
            }
        });

        return result;
    }

    this.checkLogin = function (loginData) {

        var users = localStorage.getItem('userAccounts');
        var currentUser = null;

        if (users != null) {
            users = JSON.parse(users);

            angular.forEach(users, function (user) {
                if (user.email == loginData.email) {
                    if (user.password == loginData.password) {
                        currentUser = user;
                    }
                }
            });
        }
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        return currentUser;
    };

    this.getCurrentUser = function () {
        var currentUser = localStorage.getItem("currentUser");
        return JSON.parse(currentUser);
    };

    this.logOut = function () {
        localStorage.removeItem("currentUser");
    };

    this.addMoney = function (amount) {
        var users = localStorage.getItem('userAccounts');
        users = JSON.parse(users);
        var currentUser = this.getCurrentUser();

        currentUser.saldo += amount;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        users[currentUser.index] = currentUser;

        localStorage.setItem('userAccounts', JSON.stringify(users));
    }

    this.getUserInfoParticipants = function (participants) {
        var users = localStorage.getItem('userAccounts');
        users = JSON.parse(users);

        angular.forEach(users, function (user) {
            angular.forEach(participants, function (participant) {
                if (user.email == participant.user) {
                    participant.user = user;
                }
            });
        });

        return participants;
    }

    this.moneyExchange = function (sourceUserEmail, targetUserEmail, amount) {
        var users = localStorage.getItem('userAccounts');
        users = JSON.parse(users);

        angular.forEach(users, function (user) {
            if (user.email == targetUserEmail) {
                user.saldo += amount;
            } else if (user.email == sourceUserEmail) {
                user.saldo -= amount;
                localStorage.setItem("currentUser", JSON.stringify(user));
            }
        });

        localStorage.setItem('userAccounts', JSON.stringify(users));
    }
});