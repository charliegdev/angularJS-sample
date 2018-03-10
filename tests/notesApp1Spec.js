describe("ItemCtrl with inline mock", function () {
    beforeEach(module("notesApp"));

    let ctrl, mockService;
    beforeEach(module($provide => {
        mockService = {
            list: () => [{ id: 1, label: "Mock" }]
        };

        $provide.value("ItemService", mockService);

    }));

    beforeEach(inject($controller => {
        ctrl = $controller("ItemCtrl");
    }));

    it("should load mocked out items", () => {
        expect(ctrl.items).toEqual([{ id: 1, label: "Mock" }]);
    });
});