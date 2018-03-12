describe("MainController Server Calls", function () {
    beforeEach(module("serverApp"));

    let ctrl, mockBackend;

    beforeEach(inject(($controller, $httpBackend) => {
        mockBackend = $httpBackend;
        mockBackend.expectGET("/api/note").respond(404, { msg: "Not Found" });
        ctrl = $controller("MainController");
    }));

    it("should handle error while loading items", () => {
        expect(ctrl.items).toEqual([]);

        mockBackend.flush();
        expect(ctrl.items).toEqual([]);
        expect(ctrl.errorMessage).toEqual("Not Found");
    });

    afterEach(() => {
        mockBackend.verifyNoOutstandingExpectation();
        mockBackend.verifyNoOutstandingRequest();
    });
});