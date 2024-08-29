//typingEffect
// 텍스트 요소
const typingTxt = document.querySelector('.typing-ani');
//글자 모음
const letters = ["Basic", "Foundation","Fast"];
//글자 입력 속도
const speed = 100;
//현재 지정된 글자
let i = 0;


//delay 기능(마이크로초)
function delay(ms) {
    return new Promise(res => setTimeout(res,ms))
}
//타이핑 기능
const typing = async () => {
    const letter = letters[i].split("");
    while (letter.length) {
        //글자 속도 조절
        await delay(speed);
        typingTxt.innerHTML += letter.shift();
    }
    //작성 된 후 딜레이
    await delay(2000);
    remove();
}
const remove = async () => {
    const letter = letters[i].split("");
    while (letter.length) {
        await delay(speed);
        letter.pop();
        typingTxt.innerHTML = letter.join("");
    }
    i = !letters [ i + 1 ] ? 0 : i + 1;
    typing();
}
setTimeout(typing, 1500)

//locomotive , GSAP 
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({
    "(min-width: 1025px)": function() {
    const wrap = document.querySelector('.wrap');
    const mainPin = document.querySelector('.main');
    const scroller = new LocomotiveScroll({
        el: wrap,
        smooth : true,
        scrollbar: false,
    })
    ScrollTrigger.scrollerProxy(wrap, {
    scrollTop(value) {
        return arguments.length ?
            scroller.scrollTo(value, 0, 0) :
            scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: wrap.style.transform ? "transform" : "fixed"
});
    //locomotive Scroll 업데이트
    scroller.on("scroll", ScrollTrigger.update);
    window.addEventListener('load',function(){
        gsap.to('.mainVideo',{
            scrollTrigger : {
                scroller : wrap,
                trigger: mainPin,
                pin: '.main-wrap',
                start : 'top top',
                end : 'bottom bottom',
                scrub : 0.3,
            },
            width : '100%',
            ease : 'power2.inOut',
        })
    })
    ScrollTrigger.addEventListener('refresh', () => scroller.update());
    ScrollTrigger.refresh();
        }
        
})
window.addEventListener('resize', ScrollTrigger.update);
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
let folderTabs = document.querySelectorAll('.folderTab .box');
folderTabs.forEach(function(folderTab, index){
    folderTab.addEventListener('mouseenter',function(){
        folderTab.classList.remove('hover1','hover2','hover3','hover4');
        let tabIndex = index + 1;
        folderTab.classList.add(`hover${tabIndex}`)
    });
    folderTab.addEventListener('mouseleave',function(){
        folderTab.classList.remove('hover1','hover2','hover3','hover4');
    })
})

//slider
let prev = document.querySelector('.slidePrev');
let next = document.querySelector('.slideNext');
let slider = document.querySelector('.slider');

next.addEventListener('click',function(){
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0])
})
prev.addEventListener('click',function(){
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1])
})

