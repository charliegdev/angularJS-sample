angular.module("serverApp").factory("NoteService", ["$http", function ($http) {
    return {
        query: () => $http.get("/api/note")
    };
}]);