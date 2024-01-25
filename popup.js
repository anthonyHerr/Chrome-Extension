let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function updateTimerDisplay() {
  const timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  isRunning = true;
  timer = setInterval(function () {
    if (minutes === 0 && seconds === 0) {
      clearInterval(timer);
      isRunning = false;
      // You can add a notification or any other action when the timer completes.
    } else {
      if (seconds === 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      updateTimerDisplay();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  isRunning = false;
  updateTimerDisplay();
}

document.getElementById('startButton').addEventListener('click', function () {
  if (!isRunning) {
    startTimer();
  }
});

document.getElementById('resetButton').addEventListener('click', function () {
  resetTimer();
});

updateTimerDisplay();
