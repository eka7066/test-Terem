//менять местами блоки, кнопка 2
const btnTwo = $('#btn-two');
const itemOne = $('#second');

btnTwo.click(function(){
	itemOne.toggleClass("toggle");
})


