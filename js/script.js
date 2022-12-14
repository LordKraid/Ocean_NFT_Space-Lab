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


  
  
setInterval(() => counters(), 1000);

function counters(){
    let hour
    let minutes
    let second

    let countersArr = document.querySelectorAll('.seller-card__counter')

    for (let counter of countersArr) {        
        second = counter.children[2].firstElementChild.innerHTML
        minutes = counter.children[1].firstElementChild.innerHTML
        hour = counter.children[0].firstElementChild.innerHTML

        if (second - 1 >= 0) {
            counter.children[2].firstElementChild.innerHTML = second - 1
        } else if (minutes - 1 >= 0) {
            counter.children[2].firstElementChild.innerHTML = 60
            counter.children[1].firstElementChild.innerHTML = minutes - 1
        } else {
            counter.children[2].firstElementChild.innerHTML = 60
            counter.children[1].firstElementChild.innerHTML = 60
            counter.children[0].firstElementChild.innerHTML = hours - 1
        }
    }
}



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



function ButtonActive(buttonNum) {
    let gridButton = document.querySelector('.collection__grid')

    for (let i = 0; i < 8; i++) {
        if (gridButton.children[i].firstElementChild.classList[2] = 'active') {
            gridButton.children[i].firstElementChild.classList.remove('active')
            document.querySelector('.collection__img').children[i].classList.remove('active')
        }
    }

    gridButton.children[buttonNum].firstElementChild.classList.add('active')
    document.querySelector('.collection__img').children[buttonNum].classList.add('active')

    document.querySelector('collection__img')
}