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
    document.querySelector('.grid__brand').classList.add('active')
    document.querySelector('.grid__art').classList.remove('active')

    document.querySelector('.collection__brand').classList.add('active')
    document.querySelector('.collection__art').classList.remove('active')
}

function collectionArtActive() {
    document.querySelector('.grid__art').classList.add('active')
    document.querySelector('.grid__brand').classList.remove('active')

    document.querySelector('.collection__art').classList.add('active')
    document.querySelector('.collection__brand').classList.remove('active')
}



let checkbox = document.getElementById('menu-toggle')

checkbox.onclick = () => {
    if (checkbox.checked) {
        document.body.style.overflow = 'hidden';
    } else{
        document.body.style.overflow = 'visible';
    }
}



function footerOpen(count) {
    switch(count){
        case 1:
            if(document.querySelector('.market-place').classList[2]){
                document.querySelector('.market-place').classList.remove('open')
            } else{
                document.querySelector('.market-place').classList.add('open')
            }
            break
        case 2:
            if(document.querySelector('.collectibles').classList[2]){
                document.querySelector('.collectibles').classList.remove('open')
            } else{
                document.querySelector('.collectibles').classList.add('open')
            }
            break
        case 3:
            if(document.querySelector('.support').classList[2]){
                document.querySelector('.support').classList.remove('open')
            } else{
                document.querySelector('.support').classList.add('open')
            }
            break
        case 4:
            if(document.querySelector('.legal').classList[2]){
                document.querySelector('.legal').classList.remove('open')
            } else{
                document.querySelector('.legal').classList.add('open')
            }
            break
        case 5:
            if(document.querySelector('.follow').classList[2]){
                document.querySelector('.follow').classList.remove('open')
            } else{
                document.querySelector('.follow').classList.add('open')
            }
            break
    }
    
}


window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {document.querySelector('header').classList.add('scrolled')}
    else {document.querySelector('header').classList.remove('scrolled')}
  });