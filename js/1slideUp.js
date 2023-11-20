//скрытие заголовка 1, кнопка 1

const btnOne = document.querySelector('.btn-one');
const firstDiv = document.querySelector('.headline');

btnOne.addEventListener("click", function(){
    firstDiv.classList.toggle('hidden');
})



