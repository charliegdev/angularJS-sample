describe("timeAgo Filter", function (){
    const ONE_SECOND = 1000;
    const ONE_MINUTE = ONE_SECOND * 60;
    const ONE_HOUR = ONE_MINUTE * 60;
    const ONE_DAY = ONE_HOUR * 24;
    const ONE_MONTH = ONE_DAY * 30;

    beforeEach(module("filtersModule"));

    let filter, currentTime;
    let fewSecondsAgo, fewMinutesAgo, fewHoursAgo, fewDaysAgo, fewMonthsAgo;
    beforeEach(inject((timeAgoFilter) => { // When used in JS, need to append "Filter" after the filter name.
        filter = timeAgoFilter;
        currentTime = new Date().getTime();
        fewSecondsAgo = currentTime - ONE_SECOND * 6; 
        fewMinutesAgo = currentTime - ONE_MINUTE * 6;
        fewHoursAgo = currentTime - ONE_HOUR * 6;
        fewDaysAgo = currentTime - ONE_DAY * 6;
        fewMonthsAgo = currentTime - ONE_MONTH * 6;
    }));

    it("should pass just to test configs", () => {
        expect(true).toBe(true);
    });

    it("should find timeAgoFilter.", () => {
        expect(filter).not.toBe(undefined);
    });

    it("should respond based on timeStamp", () => {
        expect(filter(fewSecondsAgo)).toEqual('seconds ago');
        expect(filter(fewMinutesAgo)).toBe("minutes ago");
        expect(filter(fewHoursAgo)).toBe("hours ago");
        expect(filter(fewDaysAgo)).toBe("days ago");
        expect(filter(fewMonthsAgo)).toBe("months ago");
    });

    it("should response correctly on timeStamp, part 2", () => {
        const manyMinutesAgo = currentTime - ONE_MINUTE * 61;
        expect(filter(manyMinutesAgo)).toBe("hours ago");

        const manyHoursAgo = currentTime - ONE_HOUR * 25;
        expect(filter(manyHoursAgo)).toBe("days ago");

        const manyDaysAgo = currentTime - ONE_DAY * 32;
        expect(filter(manyDaysAgo)).toBe("months ago");
    });

    it("should respect 'showSeconds' parameter", () => {
        expect(filter(fewSecondsAgo, false)).toBe("minutes ago");
        expect(filter(fewMinutesAgo, false)).toBe("minutes ago");
        expect(filter(fewHoursAgo, false)).toBe("hours ago");
        expect(filter(fewDaysAgo, false)).toBe("days ago");
        expect(filter(fewMonthsAgo, false)).toBe("months ago");
    });
});