angular.module("notesApp", []).controller("MainCtrl", [function () {
    this.username = '';
    this.password = '';

    this.change = () => {
        this.username = '';
        this.password = '';
    };

    this.submit = () => {
        alert(this.username + " " + this.password);
    };

}]);