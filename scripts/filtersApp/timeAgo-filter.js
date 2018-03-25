angular.module("filtersModule").filter("timeAgo", [function () {
    const ONE_MINUTE = 1000 * 60;
    const ONE_HOUR = ONE_MINUTE * 60;
    const ONE_DAY = ONE_HOUR * 24;
    const ONE_MONTH = ONE_DAY * 30;

    return (ts, showSeconds = true) => {
        const currentTime = new Date().getTime();
        const diff = currentTime - ts;
        if (diff < ONE_MINUTE && showSeconds) {
            return "seconds ago";
        } else if (diff < ONE_HOUR) {
            return "minutes ago";
        } else if (diff < ONE_DAY) {
            return "hours ago";
        } else if (diff < ONE_MONTH) {
            return "days ago";
        } else {
            return "months ago";
        }
    };
}]);