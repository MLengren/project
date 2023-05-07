let acc = document.getElementsByClassName("accordeon");
let i;
let j;
for(i = 0; i < acc.length; i++){
    acc[i].onclick = function(){
        for(j = 0; j < acc.length; j++){
            if (acc[j] !== this) { //удаление класcов active и show у более не активных кнопки и блока с содержимым для его сокрытия
                acc[j].classList.remove("active"); 
                acc[j].nextElementSibling.classList.remove("show");
            }
            else{//добавление/удаление классов active и show у кнопки, на которую происходит нажатие, и соответствующего ей блока с содержимым вкладки
                this.classList.toggle("active"); 
                this.nextElementSibling.classList.toggle("show");
            }
        }
    }
}