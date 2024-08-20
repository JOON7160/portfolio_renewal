$(function(){
    //menu-btn
    $('.trigger').click(function(){
        $('.sub, .gnb-bg, .bg-overlay').slideUp('fast')
        $('.m-menu').addClass('active')
    })
    $('.close-btn').click(function(){
        $('.m-menu').removeClass('active')
    })
    //floating-top 
    $(window).scroll(function(){
        if ($(window).scrollTop() > 70) {
            $('.top-btn').addClass('active')
        }
        else {
            $('.top-btn').removeClass('active')
        }
    })
    //m-menu
    $('.menu-list li h3').click(function(){
        if($(window).width() < 640) {
        $(this).toggleClass('active')
        $(this).siblings().stop().slideToggle()
        $(this).parent().siblings().children('h3').removeClass('active')
        $(this).parent().siblings().children('h3').siblings().slideUp() 
        }
        
    })
    // gnb 
    $('.gnb li').mouseover(function(){
        $('.gnb-bg').stop().slideDown('fast')
        $('.sub').stop().fadeIn()
        $('.bg-overlay').show()
    })
    $('.bg-overlay').mouseover(function(){
        $('.gnb-bg').stop().slideUp('fast')
        $('.sub').stop().fadeOut('fast')
        $('.bg-overlay').hide()
        })
    //main swiper 
    const mainswiper = new Swiper('.main-swiper', {
        spaceBetween: 30,
        effect: "fade",
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
        el: '.main-pagination',
        },
    });
    // mainswiper control
    $('.main-swiper-play-btn').on('click',function(){
        if (mainswiper.autoplay.running) {
            mainswiper.autoplay.stop();
            $('.main-swiper-play-btn .fa-solid').removeClass('fa-play')
            $('.main-swiper-play-btn .fa-solid').addClass('fa-pause');
        } else {
            mainswiper.autoplay.start()
            $('.main-swiper-play-btn .fa-solid').removeClass('fa-pause');
            $('.main-swiper-play-btn .fa-solid').addClass('fa-play')
        }
    });
    //simulation swiper
    var simulationswiper = new Swiper(".simulation-swiper", {
        slidesPerView: 2,
        spaceBetween: 10,
        loopedSlides: 2,
        centeredSlides: true,
        loop: true,
        pagination: {
        el: ".simulation-pagination",
        type: "fraction",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".simul-btn-next",
            prevEl: ".simul-btn-prev",
        },
        breakpoints: {
            640: {
            slidesPerView: 4,
            spaceBetween: 20,
            },
            768: {
            slidesPerView: 3,
            spaceBetween: 30,
            },
            1024: {
            slidesPerView: 5,
            spaceBetween: 10,
            },
        },           
    });
    // simulation swiper control
    $('.simulation-swiper-play-btn').on('click',function(){
        if (simulationswiper.autoplay.running) {
            simulationswiper.autoplay.stop();
            $('.simulation-swiper-play-btn .fa-solid').removeClass('fa-play')
            $('.simulation-swiper-play-btn .fa-solid').addClass('fa-pause');
        } else {
            simulationswiper.autoplay.start()
            $('.simulation-swiper-play-btn .fa-solid').addClass('fa-pause')
            $('.simulation-swiper-play-btn .fa-solid').removeClass('fa-play');
        }
    });
    //recommendation swiper
    var recommendSwiper = new Swiper(".recommend-list", {
        pagination: {
        el: ".recommend-pagination",
        type: "progressbar",
        },
        navigation: {
            nextEl: ".reco-btn-next",
            prevEl: ".reco-btn-prev",
        },
        loopedSlides: 5,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            // 640: {
            // slidesPerView: 4,
            // spaceBetween: 20,
            // },
            768: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
            1024: {
            slidesPerView: 5,
            spaceBetween: 10,
            },
        },
    });
    // recommendation swiper control
    $('.reco-swiper-play-btn').on('click',function(){
        var isAutoplayRunning = recommendSwiper.autoplay.running || pagingSwiper.autoplay.running;
        if (isAutoplayRunning) {
            recommendSwiper.autoplay.stop();
            pagingSwiper.autoplay.stop();
        } else {
            recommendSwiper.autoplay.start();
            pagingSwiper.autoplay.start();
        }
        $('.reco-swiper-play-btn .fa-play').toggle(!isAutoplayRunning);
        $('.reco-swiper-play-btn .fa-pause').toggle(isAutoplayRunning);
    });
    var pagingSwiper = new Swiper (".recommend-list", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".fraction-pagination",
            type: "fraction",
        },
        loopedSlides: 1,
        loop: true,
        breakpoints: {
            640: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
            // 768: {
            // slidesPerView: 4,
            // spaceBetween: 40,
            // },
            1024: {
            slidesPerView: 5,
            spaceBetween: 10,
            },
        },
    });
    recommendSwiper.controller.control = pagingSwiper;
    //notice tab
    $('.notice-tab .tab li').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $('#' + $(this).attr('data-tab')).addClass('active')
        $('#' + $(this).attr('data-tab')).siblings().removeClass('active')
    })
})