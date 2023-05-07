let subSwiper = new Swiper(".subslider", {
    observer: true,
    observerParents: true,
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 800,
    // loop: true,
})
let mainSwiper = new Swiper(".main-slider", {
    observer: true,
    observerParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    loop: true,
    thumbs: {
        swiper: subSwiper
    },
});

