let time = 1500
let timerInterval = null

function updateDisplay(){

let minutes = Math.floor(time / 60)
let seconds = time % 60

document.getElementById("timer").textContent =
minutes + ":" + seconds.toString().padStart(2,"0")

}

function startTimer(){

if(timerInterval) return

timerInterval = setInterval(function(){

if(time > 0){

time--
updateDisplay()

}

},1000)

}

function pauseTimer(){

clearInterval(timerInterval)
timerInterval = null

}

function resetTimer(){

pauseTimer()
time = 1500
updateDisplay()

}

updateDisplay()
