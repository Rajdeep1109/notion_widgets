let time = 1500
let defaultTime = 1500
let interval = null

function updateDisplay(){

let minutes = Math.floor(time / 60)
let seconds = time % 60

document.getElementById("timer").textContent =
minutes + ":" + seconds.toString().padStart(2,"0")

}

function startTimer(){

if(interval) return

interval = setInterval(()=>{

if(time > 0){

time--
updateDisplay()

}

},1000)

}

function pauseTimer(){

clearInterval(interval)
interval = null

}

function resetTimer(){

pauseTimer()
time = defaultTime
updateDisplay()

}

function setMode(newTime,button){

defaultTime = newTime
time = newTime

pauseTimer()
updateDisplay()

document.querySelectorAll(".mode").forEach(btn=>{
btn.classList.remove("active")
})

button.classList.add("active")

}

updateDisplay()
