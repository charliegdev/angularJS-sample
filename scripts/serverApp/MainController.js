angular.module("serverApp").controller("MainController", ["NoteService", function (NoteService) {
    this.items = [];
    this.errorMessage = "";

    NoteService.query().then(response => {
        this.items = response.data;
    }, err => {
        this.errorMessage = err.data.msg;
    });
}]);