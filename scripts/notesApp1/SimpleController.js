angular.module("notesApp1").controller("SimpleController", ["$location", "$window", function ($location, $window) {
    this.navigate1 = () => {
        $location.path("/some/where");
    };

    this.navigate2 = () => {
        $location.path("/some/where/else");
    };
}]);