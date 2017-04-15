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

        var test = localStorage.getItem('userAccounts');
        console.log(test);
    }
});