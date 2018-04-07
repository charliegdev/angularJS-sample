describe("Stock Widget Directive Rendering", function () {
    beforeEach(module("stockMarketApp"));

    let $compile, $httpBackend, $rootScope;

    beforeEach(inject((_$compile_, _$httpBackend_, _$rootScope_) => {
        $compile = _$compile_;
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
    }));

    it("should render HTML based on scope correctly", () => {
        const scope = $rootScope.$new();
        scope.myStock = { name: "Best Stock", price: 100, previous: 200 };
        scope.title = "the best";

        $httpBackend.expectGET("scripts/stockMarketApp/stock.html").respond('<div>{{stockTitle}}</div> <div>{{stockData.price}}');

        const element = $compile("<stock-widget stock-data='myStock' stock-title='This is {{title}}'></div>")(scope);
        scope.$digest();
        $httpBackend.flush();

        expect(element.html()).toEqual( `<div class="ng-binding">This is the best</div> <div class="ng-binding">100</div>`);
    });



    it("should pass just for testing configuration", () => {
        expect(true).toBe(true);
    });
});