angular.module("notesApp", []).controller("MainCtrl", [function () {
    this.user = {
        username: "",
        password: ""
    };

    this.reset = () => {
        this.user = {
            username: "",
            password: ""
        };
    };

    this.submit = () => {
        console.log(this.user);
    };
}]);