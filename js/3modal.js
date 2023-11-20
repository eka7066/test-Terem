//модальное окно
const modal = $('.mod');

$(document).ready(function(){
	modal.show();
  $(window).click(function(){
  	modal.hide();
  });
});
