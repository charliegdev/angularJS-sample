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
                    immediate: ["Constant", Constant => Constant.MAGIC_NUMBER * 4],
                    async: ["$http", $http => $http.get("/api/hasAccess")]
                },
                controller: "SecondController as secCtrl"
            })
            .otherwise({ redirectTo: "/"});
    }]);