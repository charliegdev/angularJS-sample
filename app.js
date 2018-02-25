angular.module("notesApp", []).controller("MainCtrl", [function () {
    this.notes = [
        {
            id: 1,
            label: "First Note",
            done: false,
            someRandom: 31431
        },
        {
            id: 2,
            label: "Second Note",
            done: false
        },
        {
            id: 3,
            label: "Finished Third Note",
            done: true
        }
    ];
}]);