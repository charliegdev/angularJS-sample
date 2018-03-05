angular.module("notesApp", []);

angular.module("notesApp").controller("MainCtrl", [function () {
    this.tab = "first";
    this.open = newTab => {
        this.tab = newTab;
    };
}]);

angular.module("notesApp").controller("SubCtrl", ["ItemService", function (ItemService) {
    this.list = () => ItemService.list();
    this.add = () => {
        ItemService.add({
            id: this.list().length + 1,
            label: "Item " + this.list().length
        });
    };
}]);

angular.module("notesApp").factory("ItemService", [function () {
    const items = [
        { id: 1, label: "Item 0" },
        { id: 2, label: "Item 1" }
    ];

    return {
        list: function () {
            return items;
        },
        add: function (item) {
            items.push(item);
        }
    };
}]);