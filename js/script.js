//скрытие заголовка 1, кнопка 1

$(function() {
    const btnOne = $('#btn-one');
    btnOne.on('click', function(){
        $('#first').slideUp().toggle();
        
    });
});

//менять местами блоки, кнопка 2

$('#btn-two').click(function(){
	$('#second, #third').each(function() {
		if ($(this).next()) {
			el = $(this).next();
		} else {
			el = $(this).prev();
		}
	 	let copyFrom = $(this).clone(true);   
		$(el).replaceWith(copyFrom);
		
		let copyTo = $(el).clone(true);        
		$(this).replaceWith(copyTo);
	});
	return false;
});

//модальное окно
$(document).ready(function(){
	$('#myModal').css('display', 'block');
});
$('.close').click(function(){
	$('#myModal').css('display', 'none');
})
$(window).click(function(){
	$('#myModal').css('display', 'none');
})
