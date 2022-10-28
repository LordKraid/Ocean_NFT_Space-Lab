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

const swiperSellers = new Swiper('.top-sellers__swiper', {
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    },

    navigation: {
        nextEl: '.top-sellers__explore'
    }
});



function collectionBrandActive() {
    document.querySelector('.collection__brand').classList.add('active')
    document.querySelector('.collection__art').classList.remove('active')
}

function collectionArtActive() {
    document.querySelector('.collection__art').classList.add('active')
    document.querySelector('.collection__brand').classList.remove('active')
}