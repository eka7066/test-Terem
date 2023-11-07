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