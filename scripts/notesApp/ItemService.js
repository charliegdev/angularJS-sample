angular.module("notesApp").factory("ItemService", [function () {
    const items = [
        { id: 1, label: "Item 0" },
        { id: 2, label: "Item 1" }
    ];
    return {
        list: () => items,
        add: item => {
            items.push(item);
        }
    };
}]);