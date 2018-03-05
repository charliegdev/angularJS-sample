angular.module("notesApp", []);

angular.module("notesApp").controller("MainCtrl", [function () {
    this.tab = "first";
    this.open = (tab) => {
        this.tab = tab;
    };
}]);

angular.module("notesApp").controller("SubCtrl", [function () {
    this.list = [
        { id: 1, label: "Item 0" },
        { id: 2, label: "Item 1" }
    ];

    this.add = () => {
        this.list.push({
            id: this.list.length + 1,
            label: "Item " + this.list.length
        });
    };
}]);