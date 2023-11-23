Fancybox.bind("[data-fancybox]", {});

import {header} from "./header.js";

header();

const benefitsSwiper = document.querySelector('.benefits__swiper');
const swiperReviewsContainer = document.querySelector('.reviews__swiper');
const swiperContainer = document.querySelector('.rooms__swiper');

if (window.innerWidth <= 1190) {
    benefitsSwiper.classList.add('swiper');

    const benefitsList = document.querySelector('.benefits__list');
    benefitsList.classList.remove('benefits__list');
    benefitsList.classList.add('swiper-wrapper');

    const benefitsColumns = document.querySelectorAll('.benefits__column:not(.column)');
    benefitsColumns.forEach((column) => {
        column.classList.add('swiper-slide');
    });

    const swiper = new Swiper('.swiper', {
        spaceBetween: 20,
        navigation: {
            nextEl: '.buttons-navigation__btn--next',
            prevEl: '.buttons-navigation__btn--prev',
        },
        autoHeight: true,
        breakpoints: {
            1100: {
                slidesPerView: 4,
            },
            760: {
                spaceBetween: 25,
                slidesPerGroup: 2,
                slidesPerView: 3,
            },
            520: {
                spaceBetween: 25,
                slidesPerGroup: 2,
                slidesPerView: 2,
            }
        }
    });
}

if (window.innerWidth <= 1170) {
    const swiper = new Swiper('.reviews__swiper', {
        spaceBetween: 15,
        autoHeight: true,
        navigation: {
            nextEl: '.buttons-navigation__btn--next',
            prevEl: '.buttons-navigation__btn--prev',
        },
        breakpoints: {
            680: {
                slidesPerView: 2,
            },
        },
    });
} else {
    swiperReviewsContainer.style.display = 'none';
}

if (window.innerWidth <= 1100) {
    const swiper = new Swiper('.rooms__swiper', {
        spaceBetween: 15,
        autoHeight: true,
        navigation: {
            nextEl: '.buttons-navigation__btn--next',
            prevEl: '.buttons-navigation__btn--prev',
        },
        breakpoints: {
            680: {
                slidesPerView: 2,
            },
        },
    });
} else {
    swiperContainer.style.display = 'none';
}