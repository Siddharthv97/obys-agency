
// Website Loader Funtion Start

const loadingAnimation = () => {

    let websiteTimeline = gsap.timeline();

    websiteTimeline.from('.counter', {
        onStart: function () {
            let counterText = document.querySelector('#counterText');
            let countdown = 0;
            function count() {
                if (countdown != 101) {
                    counterText.innerText = countdown++
                } else {
                    clearInterval(timer)
                }
            };
            const timer = setInterval(count, 30);
        }
    })

    websiteTimeline.from('.loading_text h1 ,.loader_Waiting_text', {
        y: 150,
        stagger: 0.2,
        opacity: 0
    })

    websiteTimeline.to('#loader', {
        display: 'none',
        duration: 0.4,
        delay: 1.5
    })

    websiteTimeline.from('main', {
        opacity: 0,
        y: 1600,
        ease: Power4
    })

    websiteTimeline.from('.navbar', {
        opacity:0
    })

    websiteTimeline.from('.hero_text h1', {
        y: 140,
        stagger: 0.2,
    })
};

loadingAnimation();

// Website Loader Funtion End

// Cursor Animation Start

const cursorAnimation = () => {
    // document.addEventListener('mousemove', (movement) => {
    //     gsap.to('#cursor', {
    //         top: movement.y,
    //         left: movement.x
    //     });
    // });
    Shery.makeMagnet(".nav_items , .nav_icon");
}

cursorAnimation();
// Cursor Animation End