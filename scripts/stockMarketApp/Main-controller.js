angular.module("stockMarketApp").controller("MainController", [function () {
    this.stocks = [
        { name: "1st Stock", price: 100, previous: 220 },
        { name: "2nd Stock", price: 140, previous: 120 },
        { name: "3rd Stock", price: 110, previous: 110 },
        { name: "4th Stock", price: 400, previous: 420 }
    ];

    this.stockTemplateUrl = "scripts/stockMarketApp/stock.html";

    this.getChangePercent = stock => Math.ceil((stock.price - stock.previous) / stock.previous * 100) + "%";

    this.currentTab = "tab1";
}]);