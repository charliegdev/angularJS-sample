angular.module("notesApp", []);

angular.module("notesApp").controller("MainCtrl", ["$http", "$log", function ($http, $log) {
    this.items = [];
    this.newTodo = {};

    const fetchTodos = () => {
        return $http.get("/api/note").then(response => {
            this.items = response.data;
        }, error => {
            $log.debug(error);
        });
    };

    fetchTodos();
    
    this.add = () => {
        $http.post("/api/note", this.newTodo).then(fetchTodos).then(response => {
            this.newTodo = {};
        });
    };

    $http.get("/api/note").then(response => {
        this.items = response.data;
    }, err => {
        $log.debug(err);
    });

}]);

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

angular.module("notesApp").controller("ItemCtrl", ["ItemService", function (ItemService) {
    this.items = ItemService.list();
}]);