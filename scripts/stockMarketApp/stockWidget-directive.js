angular.module("stockMarketApp").directive("stockWidget", [function () {
    function link(scope, element, attr) {
        scope.getChangePercent = stock => Math.ceil((stock.price - stock.previous) / stock.previous * 100) + "%";
    }
    return {
        templateUrl: "scripts/stockMarketApp/stock.html",
        link
    };
}]);