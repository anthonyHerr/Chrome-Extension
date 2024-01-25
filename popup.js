let timer;
let minutes = 25;
let seconds = 0;
let memory = 0;
let isRunning = false;
//https://samples-files.com/samples/Audio/mp3/sample-file-3.mp3
// const audio = document.getElementById('audio');
// const musicTimeThreshold = 5;

let alarmSound = new Audio('sample-file-3.mp3');
alarmSound.loop = true;

function updateTimerDisplay() {
  const timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  isRunning = true;

  alarmSound.pause();
  alarmSound.currentTime = 0;

  timer = setInterval(function () {
    if (minutes === 0 && seconds === 0) {
      clearInterval(timer);
      isRunning = false;
      alarmSound.play();
      // You can add a notification or any other action when the timer completes.
      confirm("GREAT JOB! TIME TO TAKE A BREAK.");
      let timeAdded = prompt('Please type how many MINUTES to add and press ENTER')
      let parsedInput = parseInt(timeAdded, 10)
      if(timeAdded === null){
        window.close()
      }else if (!isNaN(parsedInput)) {
  minutes += parsedInput;
} else {
  // Handle invalid input (non-numeric)
  alert('Invalid input. Please enter a valid number.');
}
       updateTimerDisplay();
       startTimer()
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
    minutes = 0;
    seconds = 0;
let resetAdded = prompt('Please type how many MINUTES to add and press ENTER')
alarmSound.pause();
  alarmSound.currentTime = 0;
let parsedInput = parseInt(resetAdded, 10);
if (!isNaN(parsedInput)) {
  minutes += parsedInput;
} else {
  // Handle invalid input (non-numeric)
  alert('Invalid input. Please enter a valid number.');
}
  isRunning = false;
  clearInterval(timer)
  updateTimerDisplay();
  startTimer()
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    updateTimerDisplay();
  }

document.getElementById('startButton').addEventListener('click', function () {
  if (!isRunning) {
    startTimer();
  }
});
document.getElementById('stopButton').addEventListener('click', function () {
    if (isRunning) {
      stopTimer();
    }
  });

document.getElementById('resetButton').addEventListener('click', function () {
  resetTimer();
});

updateTimerDisplay();
