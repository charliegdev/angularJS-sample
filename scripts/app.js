angular.module("notesApp", []).controller("ListCtrl", [function () {
    this.items = [
        { id: 1, label: "First", done: true },
        { id: 2, label: "Second", done: false }
    ];

    this.getDoneClass = (item) => {
        return {
            finished: item.done,
            unfinished: !item.done
        };
    };
}]);