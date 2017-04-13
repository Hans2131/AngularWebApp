app.service("AccountService", function() {
    this.saveUser = function(user){
        console.log(JSON.stringify(user));
    };
    this.checkLogin = function(login){
        console.log(JSON.stringify(login));

        return true;
    };
});