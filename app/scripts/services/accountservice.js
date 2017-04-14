app.service("AccountService", function () {
    this.saveUser = function (newUser) {
        var users = localStorage.getItem('userAccounts');

        if (users != null) {
            users = JSON.parse(users);
        } else {
            users = [];
        }

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
        return currentUser;
    };
});