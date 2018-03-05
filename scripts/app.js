angular.module("notesApp", []);

angular.module("notesApp").controller("MainCtrl", ["$log", function ($log) {
    this.logStuff = () => {
        $log.log("Some stuff");
    };
}]);
