export function header() {
    const body = document.body;
    const headerMenu = document.querySelector('.header__nav');
    const menuBtn = document.querySelector('.menu-btn--header');
    const anchors = document.querySelectorAll('a[href*="#"]');
    const screenReader = document.querySelector('.sr-only');

    menuBtn.addEventListener('click', (event) => {
        event.preventDefault();
        screenReader.textContent = 'Закрыть меню';
        body.classList.toggle('body--active');
        headerMenu.classList.toggle('header__nav--active');
        menuBtn.classList.toggle('active');
        menuBtn.blur();
    }, {passive: true});

    function scrollToTarget(targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            body.classList.remove('body--active');
            headerMenu.classList.remove('header__nav--active');
            menuBtn.classList.remove('active');
            setTimeout(() => {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetOffset = targetSection.offsetTop - headerHeight - 30;
                window.scrollTo({top: targetOffset, behavior: 'smooth'});
            }, 300);
        }
    }

    function handleAnchorClick(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        scrollToTarget(targetId);
    }

    for (const anchor of anchors) {
        anchor.addEventListener('click', handleAnchorClick);
        anchor.addEventListener('touchstart', handleAnchorClick, {passive: true});
    }

    const menuLinks = document.querySelectorAll('.header__link');
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener('click', handleAnchorClick);
        menuLink.addEventListener('touchstart', handleAnchorClick, {passive: true});
    });
}