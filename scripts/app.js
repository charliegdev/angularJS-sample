angular.module("notesApp", []);

angular.module("notesApp").controller("MainCtrl", ["$http", "$log", function ($http, $log) {
    this.items = [];
    $http.get("/api/note").then(response => {
        this.items = response.data;
    }, err => {
        $log.debug(err);
    });
}]);