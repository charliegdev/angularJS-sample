angular.module("filtersApp").controller("FilterController", [function () {
    this.startTime = new Date().getTime();
    this.someTimeAgo = new Date().getTime() - (1000 * 60 * 60 * 4);
}]);