angular.module("routingApp").controller("DetailController", ["$routeParams", function ($routeParams) {
    this.detailId = $routeParams.detId;
    this.qStr = $routeParams.q;
    this.testStr = $routeParams.test;
    console.log($routeParams);
}]);