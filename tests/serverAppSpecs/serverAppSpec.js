describe("MainController Server Calls", function () {
    beforeEach(module("serverApp"));

    let ctrl, mockBackend;

    beforeEach(inject(($controller, $httpBackend) => {
        mockBackend = $httpBackend;
        mockBackend.expectGET("/api/note").respond([{ id: 1, label: "Mock" }]);
        ctrl = $controller("MainController");
    }));

    it("should load items from server", () => {
        expect(ctrl.items).toEqual([]);

        mockBackend.flush();
        expect(ctrl.items).toEqual([{ id: 1, label: "Mock" }]);
    });

    afterEach(() => {
        mockBackend.verifyNoOutstandingExpectation();
        mockBackend.verifyNoOutstandingRequest();
    });
});