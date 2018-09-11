const formatDate = timeInSeconds => {
    console.log(timeInSeconds);

    if (timeInSeconds > 60) {
        const minutesBelow60 = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;

        if (minutesBelow60 >= 60) {
            const hours = Math.floor(timeInSeconds / 3600);
            const minutes = Math.floor((timeInSeconds % 3600) / 60);

            if (minutes === 0 && seconds === 0) {
                return `${hours}h`;

            } else if (seconds === 0) {
                return `${hours}h ${minutes}m`;

            } else if (minutes === 0) {
                return `${hours}h ${seconds}s`;

            } else {
                return `${hours}h ${minutes}m ${seconds}s`;
            }

        } else if (seconds === 0) {
            return `${minutesBelow60}m`;

        } else {
            return `${minutesBelow60}m ${seconds}s`;
        }

    } else if (
        timeInSeconds === 0 ||
        timeInSeconds === null ||
        timeInSeconds === undefined
    ) {
        return `0s`;
    }

    else {
        return `${timeInSeconds}s`;
    }
};

module.exports = formatDate;