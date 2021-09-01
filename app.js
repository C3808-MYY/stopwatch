const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");
const displayDiv = document.querySelector(".display")
const leapDiv = document.querySelector(".leapDiv")

// buttons status for start-stop and reset-leap
let status = "stopped";
let timer ="reset";
let x = 0;
let pCount = 0

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
        timer = "leap";
        interval = window.setInterval(increser, 10);
        x = 1;
        resetButton.innerHTML = "Leap"


    } else {
        startButton.innerHTML = "Start"
        status = "stopped";
        timer = "reset"
        window.clearInterval(interval);
        resetButton.innerHTML = "Reset"

    }
}

function resetButtonf() {
    if (timer == "reset" && x == 1) {
        window.clearInterval(interval);
        status = "stopped";
        timer = "reset";
        saliseCounter = 0;
        secondCounter = 0;
        minuteCunter = 0;
        displayDiv.innerHTML = "00:00:00";
        leapDiv.innerHTML = "";
        pCount = 0;
        

    } else if(timer == "leap"){
        pCount += 1;
        // console.log(displayDiv.innerHTML);
        // console.log(` leap div -->${LeapDiv}`)
        let leapText = document.createElement("p")
        leapText.innerText = `${pCount}. Lap       ${displayDiv.innerHTML}`;
        document.querySelector(".leapDiv").appendChild(leapText);
        
    }
}





let increser = function () {
    saliseCounter += 1;

    //increse second and munite after complated a salise and second
    if (saliseCounter / 100 === 1) {
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
    } else {
        displaySecond = secondCounter;
    }
    if (minuteCounter < 10) {
        displayMunite = `0${minuteCounter}`;
    } else {
        displayMunite = `${minuteCounter}`;
    }


    displayDiv.innerHTML = `${displayMunite}:${displaySecond}:${displaySalise}`
}