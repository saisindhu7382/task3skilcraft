// Variables to track time and state
let isRunning = false;
let startTime;
let updatedTime;
let difference;
let tInterval;
let runningTime = 0;

// Elements
const startStopButton = document.getElementById("start-stop");
const resetButton = document.getElementById("reset");
const timeDisplay = document.getElementById("time-display");

// Start or Pause the stopwatch
function startStop() {
    if (isRunning) {
        clearInterval(tInterval);  // Pause the stopwatch
        startStopButton.textContent = "Start";
    } else {
        startTime = new Date().getTime() - runningTime;
        tInterval = setInterval(updateTime, 1);  // Update every millisecond
        startStopButton.textContent = "Pause";
    }
    isRunning = !isRunning;
}

// Update the displayed time
function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    runningTime = difference;

    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    // Format the time (MM:SS:MS)
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    timeDisplay.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

// Reset the stopwatch
function reset() {
    clearInterval(tInterval);  // Stop the timer
    isRunning = false;
    runningTime = 0;
    timeDisplay.textContent = "00:00:00";
    startStopButton.textContent = "Start";
}

// Event Listeners
startStopButton.addEventListener("click", startStop);
resetButton.addEventListener("click", reset);
