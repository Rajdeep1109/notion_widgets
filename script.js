let duration = 1500
let endTime = null
let interval = null
let paused = true
let remaining = duration

function updateDisplay(seconds){

let m = Math.floor(seconds / 60)
let s = seconds % 60

document.getElementById("timer").textContent =
m + ":" + s.toString().padStart(2,"0")

}

function startTimer(){

if(!paused) return

paused = false

endTime = Date.now() + remaining * 1000

interval = setInterval(()=>{

let secondsLeft = Math.round((endTime - Date.now())/1000)

if(secondsLeft <= 0){

secondsLeft = 0
clearInterval(interval)
paused = true

}

remaining = secondsLeft

updateDisplay(secondsLeft)

},250)

}

function pauseTimer(){

paused = true
clearInterval(interval)

}

function resetTimer(){

pauseTimer()

remaining = duration

updateDisplay(duration)

}

function setMode(time,button){

duration = time
remaining = time

resetTimer()

document.querySelectorAll(".mode").forEach(b=>{
b.classList.remove("active")
})

button.classList.add("active")

}

updateDisplay(duration)
