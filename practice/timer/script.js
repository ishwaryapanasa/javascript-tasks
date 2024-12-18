let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resetBtn = document.getElementById('resetBtn');
let hoursDisplay = document.getElementById('hours');
let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');

let seconds = 0, minutes=0, hours = 0;
 let isRunning=false;
let interval=0;
 function startTimer(){
   interval= setInterval(()=>{
        seconds++;
        if(seconds==60){
            seconds=0;
            minutes++;
        }
        if(minutes==60){
            minutes=0;
            hours++;
        }
        secondsDisplay.innerText=seconds<10 ? "0"+seconds : seconds;
        minutesDisplay.innerText=minutes<10 ? "0"+ minutes:minutes;
        hoursDisplay.innerText=hours < 10 ? "0"+ hours : hours;
    },1000)
    secondsDisplay.innerText=seconds;
 }
startBtn.addEventListener('click', () => {
    if (!isRunning) { // Only start the timer if it is not running
        isRunning = true;
        startTimer(); // Start the timer
    }
})
pauseBtn.addEventListener('click',()=>{
    clearInterval(interval);
    isRunning=false;
})
resetBtn.addEventListener('click',()=>{
    seconds = 0;
    minutes = 0;
    hours = 0;
  
    // Update the display to show 00:00:00
    secondsDisplay.innerText = "00";
    minutesDisplay.innerText = "00";
    hoursDisplay.innerText = "00";
  
    // If the timer is running, stop it
    clearInterval(interval);
    isRunning = false;
})
