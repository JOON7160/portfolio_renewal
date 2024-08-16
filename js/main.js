//digital clock
let clockHours = document.querySelector('.hours');
let clockMinutes = document.querySelector('.minutes');

function getTime () {
    const now = new Date(); // 현재 날씨 및 시간
    const hours = String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    clockHours.innerHTML = hours;
    clockMinutes.innerHTML = minutes;
}
getTime();
setInterval(getTime(),1000)