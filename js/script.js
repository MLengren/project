// для секции с руководством для клиентов
//изменение цвета подчеркивания вместе с остальным текстом при наведении курсора на каждую из карточек
let stpbl1 = document.getElementById("stepbl1");
let stpbrdr1 = document.getElementById("stepbrdr1");

let stpbl2 = document.getElementById("stepbl2");
let stpbrdr2 = document.getElementById("stepbrdr2");

let stpbl3 = document.getElementById("stepbl3");
let stpbrdr3 = document.getElementById("stepbrdr3");

stpbl1.onmouseover = function(){ //изменение цвета подчеркивания вместе с остальным текстом при наведении курсора на карточку 1
    stpbrdr1.style.borderBottom = "3px solid white";
}
stpbl1.onmouseout = function(){ //возвращение цвета подчеркивания к исодному при отведении курсора с карточки 1
    stpbrdr1.style.borderBottom = "3px solid black";
}

stpbl2.onmouseover = function(){
    stpbrdr2.style.borderBottom = "3px solid white";
}
stpbl2.onmouseout = function(){
    stpbrdr2.style.borderBottom = "3px solid black";
}

stpbl3.onmouseover = function(){
    stpbrdr3.style.borderBottom = "3px solid white";
}
stpbl3.onmouseout = function(){
    stpbrdr3.style.borderBottom = "3px solid black";
}


//слайдер для секции с сервисами
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n){ //переход по слайдам вперед/назад с помощью иконок стрелок
    showSlides(slideIndex += n)
}
function currentSlide(n){ //переход на конкретный слайд с помощью кружков навигации
    showSlides(slideIndex = n)
}
function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if(n>slides.length){ //если индекс слайда больше длинны массива слайдов, возвращаемся к первому
        slideIndex = 1;
    }
    if(n < 1){ //если индекс слайда меньше 1, переход на последний слайд
        slideIndex=slides.length;
    }
    for(i=0; i<slides.length; i++){
        slides[i].style.display="none"; //сокрытие всех слайдов
    }
    for(i=0; i<dots.length; i++){
        dots[i].className=dots[i].className.replace("active-dot","");//убираем у всех навигационных кружков класс active-dot
    }
    slides[slideIndex-1].style.display = "block"; //отображение указанного слайда
    dots[slideIndex-1].className += " active-dot"; //добавляем кружку указанного слайда класс active-dot, для визуального выделения
}


// const introtext = document.getElementById('introtext');
// introtext.classList.add('introactive');

//кнопка прокрутки наверх экрана
let scrollBtn = document.getElementById("scrollTop");
window.onscroll = function (){ //при прокрутке экрана выполняется следующая функция
    if(window.scrollY < 600){ //скрытие кнопки прокрутки наверх при высоте экрана < 600
        scrollBtn.classList.add("scrollhide"); //добавление к кнопке прокрутки класса scrollhide скрывающего элемент
    }else if(window.scrollY > 600){
        scrollBtn.classList.remove("scrollhide"); //класс scrollhide убирается если высота экрана > 600
    }
};
scrollBtn.onclick = function(){ //при нажатии на кнопку прокрутки выполняется функция
    window.scrollTo(0, 0); //скролл экрана наверх
}