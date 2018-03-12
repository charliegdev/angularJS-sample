describe("ItemCtrl with spies", function () {
    beforeEach(module("notesApp"));
    let ctrl, itemService;

    beforeEach(inject(($controller, ItemService) => {
        spyOn(ItemService, "list").and.returnValue([
            { id: 1, label: "Mock" }
        ]);
        itemService = ItemService;
        ctrl = $controller("ItemController");
    }));

    it("should load mocked out items", () => {
        expect(itemService.list).toHaveBeenCalled();
        expect(itemService.list.calls.count()).toEqual(1);
        expect(ctrl.items).toEqual([
            { id: 1, label: "Mock" }
        ]);
    });
});