const swiperCardFlex = new Swiper('.card-flex', {
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2.1,
        },
        0: {
            slidesPerView: 1.1,
        }
    },

    navigation: {
        nextEl: '.card__explore'
    }
});

const swiperUserFlex = new Swiper('.users__card-flex', {
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2.1,
        },
        0: {
            slidesPerView: 1.1,
        }
    },

    navigation: {
        nextEl: '.user__explore'
    }
});
