let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu')

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active');
}



let bell = document.querySelector('.notification');
document.querySelector('#bell-icon').onclick = () => {
    bell.classList.toggle('active');
}




var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {  
        delay:5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1068: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});

window.onscroll = function() {mufunction()};

function mufunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrooled = (winScroll / height) * 100;
    document.getElementById('scrool-bar').style.width = scrooled + '%'
}