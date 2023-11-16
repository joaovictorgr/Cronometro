const minutosE1 = document.querySelector("#minutos");
const segundosE1 = document.querySelector("#segundos");
const milisegundosE1 = document.querySelector("#milisegundos");
const iniciarBTN = document.querySelector("#iniciarBTN");
const pauseBTN = document.querySelector("#pauseBTN");
const continuarBTN = document.querySelector("#continuarBTN");
const resetarBTN = document.querySelector("#resetarBTN");

let interval;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let isPaused = false;

iniciarBTN.addEventListener("click", startTimer);
pauseBTN.addEventListener("click", pauseTimer)
continuarBTN.addEventListener("click", resumeTimer);
resetarBTN.addEventListener("click", resetTimer);

function startTimer(){

    interval = setInterval(() => {

        if(!isPaused){

            milisegundos += 10

            if(milisegundos === 1000) {
                segundos++;
                milisegundos = 0;
            }

            if(segundos === 60){
                minutos++;
                segundos = 0;
            }

            minutosE1.textContent = formatTime(minutos);
            segundosE1.textContent = formatTime(segundos);
            milisegundosE1.textContent = formatMilisegundos(milisegundos);
        }
    }, 10)

    iniciarBTN.style.display = "none";
    pauseBTN.style.display = "block";
}

function pauseTimer(){
    isPaused = true;
    pauseBTN.style.display = "none";
    continuarBTN.style.display = "block";
}

function resumeTimer(){
    isPaused = false;
    pauseBTN.style.display = "block";
    continuarBTN.style.display = "none";
}

function resetTimer(){
    clearInterval(interval);
    minutos = 0;
    segundos = 0;
    milisegundos = 0;

    minutosE1.textContent = "00";
    segundosE1.textContent = "00";
    milisegundosE1.textContent = "000";

    iniciarBTN.style.display = "block";
    pauseBTN.style.display = "none";
    continuarBTN.style.display = "none";
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function formatMilisegundos(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}