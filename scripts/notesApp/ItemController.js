angular.module("notesApp").controller("ItemController", ["ItemService", function (ItemService) {
    this.items = ItemService.list();
}]);