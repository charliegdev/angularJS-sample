describe("Controller: MainCtrl", function () {
    beforeEach(module("notesApp"));

    let ctrl;

    beforeEach(inject(($controller) => {
        ctrl = $controller("MainCtrl");
    }));

    it("should have an empty user object ready", () => {
        expect(ctrl.user).toEqual({
            username: "",
            password: ""
        });
    });

    it("should clear user object if reset function is called", () => {
        ctrl.user = {
            username: "test",
            password: "1324"
        };

        ctrl.reset();
        expect(ctrl.user).toEqual({
            username: "",
            password: ""
        });
    });
});