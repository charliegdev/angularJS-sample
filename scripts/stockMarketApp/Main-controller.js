angular.module("stockMarketApp").controller("MainController", [function () {
    this.stocks = [
        { name: "1st Stock", price: 100, previous: 220 },
        { name: "2nd Stock", price: 140, previous: 120 },
        { name: "3rd Stock", price: 110, previous: 110 },
        { name: "4th Stock", price: 400, previous: 420 }
    ];

    this.currentTab = "tab1";
    this.changeAllStocks = () => { 
        for (let i = 0; i < this.stocks.length; i++) {
            this.stocks[i] = { name: "Controller Stock", price: 200, previous: 250 };
        }
    };

    // this.changeFirstStock = () => { this.stocks[0].name = 'Changed First Stock'; };
    this.changeFirstStock = () => { this.stocks[0] = { name: 'Changed First Stock', price: 50000, previous: 200 }; };
}]);