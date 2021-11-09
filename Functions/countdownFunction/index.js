export function timeToSecond(timeF) {
    let timeString = timeF;
    let timeArray = timeString.split(":");
    let hours = parseInt(timeArray[0]);
    let minutes = parseInt(timeArray[1]);
    let seconds = parseInt(timeArray[2]);
    let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

    return totalSeconds;
}

export function convertToShow(timeF) {
    let hours = Math.floor(timeF / 3600);
    let minutes = Math.floor((timeF - (hours * 3600)) / 60);
    let seconds = timeF - (hours * 3600) - (minutes * 60);

    return String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}