angular.module("serverApp").controller("MainController", ["$http", function ($http) {
    this.items = [];
    this.errorMessage = "";

    $http.get("/api/note").then(response => {
        this.items = response.data;
    }, err => {
        this.errorMessage = err.data.msg;
    });
}]);