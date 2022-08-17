let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

let hours = document.querySelector(".hour");
let mins = document.querySelector(".miniute");
let seconds = document.querySelector(".second");

let hour = 0;
let min = 0;
let second = 0;

let interval;

start.addEventListener("click", function () {
    interval = setInterval(function () {
        if (second < 59) {
            second++;
            seconds.innerHTML = second < 10 ? " 0" + second : second;
        }
        else {
            second = 0;
            seconds.innerHTML = second < 10 ? "0" + second : second;
            if (min < 59) {
                min++;
                mins.innerHTML = min < 10 ? "0" + min + ":" : min + ":";
            }
            else {
                hour++;
                hours.innerHTML = hour < 10 ? "0" + hour + ":" : hour + ":";
            }

        }
    }, 1000);
    start.style.pointerEvents = "none";
});

stop.addEventListener('click', function () {
    clearInterval(interval);
    start.style.pointerEvents = "visible";
});
reset.addEventListener("click", function () {
    location.reload();
})