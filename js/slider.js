let subSwiper = new Swiper('.subslider', {
    observer: true,
    observerParents: true,
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 800,
    // loop: true,
})
let mainSwiper = new Swiper('.main-slider', {
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


// var slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n){ //переход по слайдам вперед/назад с помощью иконок стрелок
//     showSlides(slideIndex += n)
// }
// function currentSlide(n){ //переход на конкретный слайд с помощью кружков навигации
//     showSlides(slideIndex = n)
// }
// function showSlides(n){
//     var i;
//     var slides = document.getElementsByClassName("slide");
//     if(n>slides.length){ //если индекс слайда больше длинны массива слайдов, возвращаемся к первому
//         slideIndex = 1;
//     }
//     if(n < 1){ //если индекс слайда меньше 1, переход на последний слайд
//         slideIndex=slides.length;
//     }
//     for(i=0; i<slides.length; i++){
//         slides[i].style.display="none"; //сокрытие всех слайдов
//     }
//     slides[slideIndex-1].style.display = "block"; //отображение указанного слайда
// }

