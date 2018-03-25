angular.module("routingApp", ["ngRoute"])
    .value("Constant", { MAGIC_NUMBER: 42 })
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/", {
                template: "<h1>This is the default route, without resolves.</h1>"
            })
            .when("/second", {
                template: "<h1>Protected Page</h1>",
                resolve: {
                    immediate: ["Constant", Constant => false ],
                    async: ["$http", $http => $http.get("/api/hasAccess").then(response => response.data)]
                },
                controller: "SecondController as secCtrl"
            })
            .when("/detail/:detId", {
                template: "<h2>Loaded {{detCtrl.detailId}} and query String is: {{detCtrl.qStr}} {{detCtrl.testStr}}</h2>",
                controller: "DetailController as detCtrl"
            })
            .otherwise({ redirectTo: "/"});
    }]);