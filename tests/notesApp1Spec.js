describe("ItemCtrl with inline mock", function () {
    let ctrl;
    beforeEach(module("notesApp"));
    beforeEach(module("notesAppMocks"));

    beforeEach(inject($controller => { 
        ctrl = $controller("ItemController"); 
    }));

    it("should load mocked out items", () => {
        expect(ctrl.items).toEqual([{ id: 1, label: "Mock" }]);
    });
});