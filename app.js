angular.module("notesApp", []).controller("MainCtrl", [function () {
    this.notes = {
        shyam: { id: 1, label: "First Note", done: false },
        Misko: { id: 3, label: "Finished Third Note", done: true },
        brad: { id: 2, label: "Second Note", done: false },
    };
}]);