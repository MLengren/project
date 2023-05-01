//поиск по каталогу товаров
document.querySelector('#elastic').oninput = function (){ //при вводе данных в поиск выполняется следующая функция
    let val = this.value.trim().toLowerCase();//получение и перевод в нижний регистр вводимых пользователем символов + удаление пробелов
    let elasticItems = document.querySelectorAll('.elastic li');//список всех доступных при поиске моделей
    if (val != ''){ //если вводимое пользователем значение не пустая строка
        elasticItems.forEach(function(elem){ //проверка, совпадает ли вводимое значение с каждым элементом из списка моделей
            if(elem.innerText.toLowerCase().search(val) != -1){//если символы в названиях доступных моделей совпадают с вводимыми пользователем
                elem.classList.add('show'); //этим моделям добавляется класс swow и они отображаются в поиске
            }
            else {
                elem.classList.remove('show'); //если символы не совпадают - класс show убирается и модель скрывается из поиска
            }
        });
    }
    else { //если вводимое значение - пустая строка
        elasticItems.forEach(function(elem){ //у всех моделей убирается класс show и они не отображаются
            elem.classList.remove('show');
        });
    }
}