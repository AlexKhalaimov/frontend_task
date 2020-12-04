window.onload = function () {
    const body = document.body;
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.header__inner');
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    const header = document.querySelector('.header');
    const w = window.innerWidth;
    let lastScroll = 0;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
            menu.classList.toggle('menu-show');
            body.classList.toggle('overflow');
    });

        function scrollHeader () {
            const currentScroll = window.pageYOffset;
            header.classList.add('scrolled');
            if (window.pageYOffset > 70) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            if ( w < 1024) {
                if (currentScroll <= 0) {
                    body.classList.remove(scrollUp);
                    return;
                }

                if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
                    body.classList.remove(scrollUp);
                    body.classList.add(scrollDown);
                } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {

                    body.classList.remove(scrollDown);
                    body.classList.add(scrollUp);
                }
                lastScroll = currentScroll;
            }
    }
    window.addEventListener("scroll", throttle(scrollHeader, 100));

}

function throttle (callback, limit) {
    let wait = false;
    return function () {
        if (!wait) {
            callback.call();
            wait = true;
            setTimeout(function () {
                wait = false;
            }, limit);
        }
    }
}
