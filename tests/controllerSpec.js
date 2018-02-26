describe("Controller: ListCtrl", function () {
    beforeEach(module("notesApp"));

    let ctrl;

    beforeEach(inject(($controller) => {
        ctrl = $controller("ListCtrl");
    }));

    it("should have items available on load", () => {
        expect(ctrl.items).toEqual([
            { id: 1, label: "First", done: true },
            { id: 2, label: "Second", done: false }
        ]);
    });

    it("should have highlight items based on state", () => {
        const item = { id: 1, label: "First", done: true };

        let actualClass = ctrl.getDoneClass(item);
        expect(actualClass.finished).toBeTruthy();
        expect(actualClass.unfinished).toBeFalsy();

        item.done = false;
        actualClass = ctrl.getDoneClass(item);
        expect(actualClass.finished).toBeFalsy();
        expect(actualClass.unfinished).toBeTruthy();
    });
});