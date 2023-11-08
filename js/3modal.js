//модальное окно

const modal = $('#myModal');

$(document).ready(function(){
	modal.toggle();
  $(window).click(function(){
  	modal.hide();
  });
});
