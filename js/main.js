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

//tab
let tab = document.querySelectorAll('.circle');
let tabContent = document.querySelectorAll('.contentItem');
for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click',function(){
        for (let s = 0; s < tab.length ; s++) {
            tab[s].classList.remove('active')
            tabContent[s].classList.remove('active');
        }
        tab[i].classList.add('active')
        tabContent[i].classList.add('active')
    })
};

//videoPlay 
let video = document.querySelector('video');
let videoBox = document.querySelector('.videoBox');
videoBox.addEventListener('mouseenter', () => video.play());
videoBox.addEventListener('mouseleave', () => video.pause());

//folderTab

let tabBox = document.querySelector('.boxColor4');
tabBox.addEventListener('mouseenter',function(){
    tabBox.classList.add('hover4')
})