angular.module("notesApp", []).controller("MainCtrl", [function () {
    let notes = [
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

    this.notes1 = angular.copy(notes);
    this.notes2 = angular.copy(notes);

    this.changeNotes = () => {
        notes = [
            {
                id: 1,
                label: "Changed Note",
                done: false,
                someRandom: 4242
            },
            {
                id: 2,
                label: "Second Note",
                done: false,
            },
            {
                id: 3,
                label: "Finished Third Note",
                done: true,
            },
        ];

        this.notes1 = angular.copy(notes);
        this.notes2 = angular.copy(notes);
    };
}]);