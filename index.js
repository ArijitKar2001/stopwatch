
function timer() {
    ms += 10;
    if (ms == 1000) {
        ms = 0;
        s++;
        if (s==60) {
            s = 0;
            m++;
            if(m == 60){
                m = 0;
                h++;
            }
        }
    }
    let hr = h < 10 ? "0" + h : h;
    let min = m < 10 ? "0" + m : m;
    let sec = s < 10 ? "0" + s : s;
    let millsec = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;
    clock.innerHTML = `${hr} : ${min} : ${sec} : ${millsec}`

}

function startTimer() {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(timer, 10);
}

function pauseTimer() {
    clearInterval(int);
}

function resetTimer() {
    clearInterval(int);
    [h, m, s, ms] = [0,0,0,0];
    clock.innerHTML = "00 : 00 : 00 : 000";
}




let clock = document.getElementById("clock");
let int  = null;
let [h, m, s, ms] = [0,0,0,0];

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
