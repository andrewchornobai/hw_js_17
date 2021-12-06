
function dateMain() {
    setInterval(() => {
        let setD = new Date();
        let day = setD.getDate();
        let month = setD.getMonth() + 1;
        let year = setD.getFullYear();
        if (day <= 9) day = '0' + day;
        if (month <= 9) month = '0' + month;
        document.querySelector('.main_date').innerHTML = `${day}.${month}.${year}`;
    })
}
dateMain();


function time() {
    setInterval(() => {
        let setD = new Date();
        let hours = setD.getHours();
        let minutes = setD.getMinutes();
        let second = setD.getSeconds();
        if (hours <= 9) hours = '0' + hours;
        if (minutes <= 9) minutes = '0' + minutes;
        if (second <= 9) second = '0' + second;

        document.querySelector('.time').innerHTML = `${hours}:${minutes}:${second}`;

    })
}
time();


let interval;
function start() {
    interval = setInterval(some_number, 10);
}


let milisecond = 0;
let second = 0;
let minutes = 0;


function some_number() {

    milisecond++;
    if (milisecond > 99) {
        second += 1;
        milisecond = 0;
    } if (second < 10) {

    }
    if (second > 59) {
        second = 0;
        minutes += 1;
    }


    document.querySelector('.stopwatch').innerHTML = `${minutes}:${second}:${milisecond}`;
}

function stop() {
    clearInterval(interval);
}
function reset() {
    stop();
    document.querySelector('.stopwatch').innerHTML = `00:00:00`;
    milisecond = 00;
    second = 00;
    minutes = 00;

}
// -------------------------------------------------------------------------------
let time_for_timer = document.querySelector('.time_for_timer');
let some_time_from_timer = document.querySelector('.some_time_from_timer');
let some_timers = 0;

document.querySelector('.btn_timer_add').addEventListener('click', () => {
    some_timers++;
    time_for_timer.innerHTML = `${some_timers}`;
})


document.querySelector('.btn_timer_clear').addEventListener('click', () => {
    if (some_timers > 0) {
        some_timers--;
        time_for_timer.innerHTML = `${some_timers}`;
    }
})



// ---------------------------------------------------------------------------------------------
document.querySelector('.btn_start_time').addEventListener('click', () => {
    timeOfTimer();
    document.querySelector('btn_timer_add').disabled == true;
})

document.querySelector('.btn_stop_time').addEventListener('click', () => {
    clearInterval(some_interval);
})

let some_interval;
let timer_second = 5;
function timeOfTimer() {
    some_timers--;
    some_interval = setInterval(() => {
        if (some_timers >= 0) {
            timer_second--;
            if (timer_second < 10) {
                timer_second = '0' + timer_second;
            }
            if (timer_second <= 0) {
                some_timers--;
                timer_second = 60;
            }
            
            document.querySelector('.some_time_from_timer').innerHTML = `${some_timers}:${timer_second}`;
        }
        else{
            clearInterval(some_interval);
            document.querySelector('.some_time_from_timer').innerHTML = `STOP`;
        }
    }, 1000)

}



















