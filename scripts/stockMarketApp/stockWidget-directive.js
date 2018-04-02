angular.module("stockMarketApp").directive("stockWidget", [function () {
    function link(scope, element, attr) {
        scope.getChangePercent = stock => Math.ceil((stock.price - stock.previous) / stock.previous * 100) + "%";
        scope.onSelect = () => { 
            scope.whenSelect({
                stockName: scope.stockData.name,
                stockPrice: scope.stockData.price,
                stockPrevious: scope.stockData.previous
            });
        };
    }
    return {
        templateUrl: "scripts/stockMarketApp/stock.html",
        link,
        scope: { 
            stockData: "=",
            stockTitle: "@",
            whenSelect: "&"
        }
    };
}]);