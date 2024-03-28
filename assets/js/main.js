$(function () {
    visualSlide = new Swiper('.sc-visual .visual-slide', {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev'
        }
    });

    const headTxt = new SplitType('[data-split="text"]', {
        types: 'words, chars',
    });

    gsap.to('#sec02 .word', {
        scrollTrigger: {
            trigger: ".sec02-wrapper",
            start: "0% 30%",
            end: "100% 100%",
            scrub: 0,
            // markers:true,
        },
        opacity: 1,
        stagger: 1,
        ease: 'none'
    });

    gsap.to('#sec03 .sticky', {
        scrollTrigger: {
            trigger: "#sec03",
            start: "0% 100%",
            end: "0% 20%",
            scrub: 0,
            // markers:true,
        },
        width: '100%',
        ease: 'none'
    })

    gsap.to('#sec03 .round1', {
        scrollTrigger: {
            trigger: "#sec03",
            start: "0% 100%",
            end: "100% 0%",
            scrub: 0,
            // markers:true,
        },
        transform: 'translate3d(-50%, 791.15px, 0px) scale3d(6, 6, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
    });

    $('#sec03 .tab-nav a').click(function (e) {
        e.preventDefault();
        target = $(this).data('target')
        $(this).addClass('on').siblings().removeClass('on');
        $(target).addClass('on').siblings().removeClass('on');
    });

    gsap.from('#sec04 .char', {
        scrollTrigger: {
            trigger: "#sec04",
            start: "0% 80%",
            end: "100% 100%",
            // scrub:0,
            // markers:true,
            toggleActions: "play none none reset"
        },
        yPercent: 100,
        stagger: 0.01
    });

    // // 원본start
    // gsap.from('#sec04 .char', {
    //     scrollTrigger: {
    //         trigger: "#sec04",
    //         start: "0% 80%",
    //         end: "100% 100%",
    //         // scrub:0,
    //         // markers:true,
    //         toggleActions: "play none none reset"
    //     },
    //     yPercent: 100,
    //     stagger: 0.01
    // })
    // // 원본end



    // line
    $('.sc-text .inner').each(function (i, el) {
        // desc = $(this).find('.desc')
        line = $(this).find('.line')
        motion = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "0% 50%", //트리거기준 //윈도우기준 둘이 만나면 실행
                end: "0% 100%", //트리거기준 //윈도우기준  둘이 만나면 종료
                // end: "50% 50%", //트리거기준 //윈도우기준  둘이 만나면 종료
                // markers: true,
                // scrub: 1,
                toggleActions: "play none none none"
                // toggleActions: "play none none reset"
            },
        })
        motion
            .addLabel('a')
            .from(el, {
                // opacity: 0,
                wPercent: 20
            }, 'a')
            // .from(desc, { background: '#f00' }, 'a')
            .to(line, {
                width: '100%'
            }, 'a')

    })


    // sec05 아이콘
    var animation1 = bodymovin.loadAnimation({
        container: $('#lottie_1')[0], // Required
        path: './assets/data/motion1.json', // URL 직접 입력
        //path: 'data.json', // 실제 사용 폴더 지정 ex) data.json
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true // Optional
    });
    var animation2 = bodymovin.loadAnimation({
        container: $('#lottie_2')[0],
        path: 'https://assets-global.website-files.com/64134ec62817cef57d3b678f/65244e1cb8045f3499bdfabe_pasdecompte.json', // URL 직접 입력
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation3 = bodymovin.loadAnimation({
        container: $('#lottie_3')[0],
        path: 'https://assets-global.website-files.com/64134ec62817cef57d3b678f/65244efa10955ef47346c9ad_02_prive_public.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation4 = bodymovin.loadAnimation({
        container: $('#lottie_4')[0],
        path: 'https://assets-global.website-files.com/64134ec62817cef57d3b678f/65244efa7a90f3f32309877e_07_indique_participe.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation5 = bodymovin.loadAnimation({
        container: $('#lottie_5')[0],
        path: 'https://assets-global.website-files.com/64134ec62817cef57d3b678f/65244efa456b31c27d3f08f9_06_notifie_invites.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation6 = bodymovin.loadAnimation({
        container: $('#lottie_6')[0],
        path: './assets/data/motion6.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });


    // sec05 슬라이드
    const hori1 = gsap.to('#sec05 .sticky .inner', {
        scrollTrigger: {
            trigger: "#sec05",
            start: "0% 0%",
            end: "100% 100%",
            scrub: 0,
            // markers:true,
        },
        xPercent: -100,
        x: window.innerWidth,
        ease: 'none'
    });

    gsap.to('#sec05 .group-scroll .scroll-item:nth-child(3)', {
        scrollTrigger: {
            // trigger: "#sec05 .group-scroll .scroll-item:nth-child(3)",
            // containerAnimation: hori1,
            start: "0% 50%",
            end: "100% 50%",
            // markers: true,
            scrub: 0,
        },
        // rotation: 20,
    });

    gsap.from('#sec06 .char', {
        scrollTrigger: {
            trigger: "#sec06",
            start: "0% 80%",
            end: "100% 100%",
            // scrub:0,
            // markers:true,
            toggleActions: "play none none reset"
        },
        yPercent: 100,
        stagger: 0.01
    });

    // sec07
    $('[data-scroll]').each(function (i, el) {
        xVal = $(this).data('scroll');

        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "0% 100%",
                end: "100% 0%",
                scrub: 0,
                // markers: true,
            },
            yPercent: xVal,
        })
    });

    // sec08
    gsap.to('#sec08 .round2', {
        scrollTrigger: {
            trigger: "#sec08",
            start: "0% 100%",
            end: "100% 0%",
            scrub: 0,
        },
        transform: 'translate3d(-50%, 651.2px, 0px) scale3d(5, 5, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
    });
    window.addEventListener("resize", ScrollTrigger.update);

    gsap.from('#sec09 .char', {
        scrollTrigger: {
            trigger: "#sec09",
            start: "0% 40%",
            end: "100% 100%",
            // scrub:0,
            // markers:true,
            toggleActions: "play none none reset"
        },
        yPercent: 100,
        stagger: 0.01
    });

    $('.sc-accordion .nav-item .nav').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('on')) {
            $(this).removeClass('on').siblings('.sub').slideUp();

        } else {
            $('.sc-accordion .nav-item .nav').removeClass('on').siblings('.sub').slideUp();
            $(this).addClass('on').siblings('.sub').slideDown();
        }
    });

    const hori2 = gsap.to('#sec10 .sticky .inner', {
        scrollTrigger: {
            trigger: "#sec10",
            start: "0% 0%",
            end: "100% 100%",
            scrub: 0,
            // markers:true,
        },
        xPercent: -100,
        x: window.innerWidth,
        ease: 'none'
    });

    // 하단 고정메뉴
    $('.fixed-container .menu-area .btn-menu').click(function () {
        $('.fixed-container .group-flex').toggleClass('on')
        $('.fixed-container .form.area').toggleClass('on')
    });




    // 하단 고정메뉴 버튼 애니메이션
    $('.btn-ani').mouseenter(function () {
        $(this).addClass('on')
    });
    $('.btn-ani').mouseleave(function () {
        $(this).removeClass('on')
    });


}); //end