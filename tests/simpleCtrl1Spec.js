describe("SimpleCtrl", function () {
    beforeEach(module("notesApp1"));

    let ctrl, $loc;
    beforeEach(inject(($controller, $location) => {
        ctrl = $controller("SimpleCtrl");
        $loc = $location;
    }));

    it("should navigate away from the current page", () => {
        expect($loc.path()).toEqual("");
        $loc.path("/here");
        ctrl.navigate1();
        expect($loc.path()).toEqual("/some/where");
    });

    it("should navigate away from the current page", () => {
        expect($loc.path()).toEqual("");
        $loc.path("/there");
        ctrl.navigate2();
        expect($loc.path()).toEqual("/some/where/else");
    });
});