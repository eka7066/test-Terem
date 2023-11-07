//скрытие заголовка 1, кнопка 1
const btnOne = $('#btn-one');

$(function() {
    btnOne.on('click', function(){
        $('#first').slideUp().toggle();  
    });
});


