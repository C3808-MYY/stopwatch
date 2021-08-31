const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");
const displayDiv = document.querySelector(".display")

let status = "stopped"
let saliseCounter = 0;
let secondCounter = 0;
let minuteCounter = 0;

let displaySalise = 0;
let displaySecond = 0;
let displayMunite = 0;

function startButtonf() {
    if (status === "stopped") {
        startButton.innerHTML = "Stop"
        status = "started";
        interval = window.setInterval(increser, 2);

    } else {
        startButton.innerHTML = "Start"
        status = "stopped";
        window.clearInterval(interval);

    }
}

let increser = function () {
    saliseCounter += 1;

    //increse second and munite after complated a salise and second
    if (saliseCounter / 60 === 1) {
        saliseCounter = 0;
        secondCounter += 1;

        if (secondCounter / 60 === 1) {
            secondCounter = 0;
            minuteCounter += 1
        }
    }
    //salise second munite  increser +1 
    if (saliseCounter < 10) {
        displaySalise = `0${saliseCounter}`;
    } else {
        displaySalise = `${saliseCounter}`;
    }

    if (secondCounter < 10) {
        displaySecond = `0${secondCounter}`;
    } else{
        displaySecond = secondCounter;
    }
    if (minuteCounter < 10){
        displayMunite = `0${minuteCounter}`;
    } else{
        displayMunite = `${minuteCounter}`;
    }


        displayDiv.innerHTML = `${displayMunite}:${displaySecond}:${displaySalise}`
}



function resetButtonf() {
    window.clearInterval(interval);
    status = "stopped";
    saliseCounter = 0;
    secondCounter = 0;
    minuteCunter = 0;
    displayDiv.innerHTML = "00:00:00";


}