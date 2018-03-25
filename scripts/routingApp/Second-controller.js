angular.module("routingApp").controller("SecondController", ["$log", "immediate", "async", function ($log, immediate, async) {
    $log.log("Immediate is ", immediate);
    $log.log("Server returned for async", async);
}]);