angular.module("notesApp").controller("MainController", ["$http", "$log", function ($http, $log) {
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