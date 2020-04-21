let timeRemaining;
let inNumVal;
let interval;

function setAlarm() {
  // This function will execute when click the set alarm button.
  let inputNum = document.querySelector("#alarmSet");
  inNumVal = inputNum.value;
  timeRemaining = document.querySelector("#timeRemaining");
  clearInterval(interval);
  interval = setInterval(decrement, 1000); // set the interval to count down the time.
}

function decrement() {
  // This function will count down to zero, if it reach's zero play alarm and clear the interval.
  if (inNumVal > 0) {
    inNumVal--;
  } else {
    playAlarm();
    clearInterval(interval);
  }
  timeRemaining.innerHTML = `Time Remaining: ${numToTime(inNumVal)}`;
}

function numToTime(i) {
  //This function will convert the number which user has inserted in input to time (minutes : second).
  let minutes = Math.floor(i / 60);
  let seconds = i - minutes * 60;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    clearInterval(interval);
  });
}

function playAlarm() {
  audio.volume = 0.05;
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
