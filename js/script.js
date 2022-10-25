const swipercardFlex = new Swiper('.card-flex', {
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
        nextEl: '.next'
    }
});
