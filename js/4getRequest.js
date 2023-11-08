function sendJSON() {
    event.preventDefault();
    let fields = document.querySelectorAll('.field');
    let lists = document.querySelectorAll('.list')
    let result = document.querySelector('.result');

    let xhr = new XMLHttpRequest();
    let url = "./json.php";      
    xhr.open("GET", url, true); 
    
    let data = JSON.stringify({ 
    "list1": lists[0].value,
    "list2": lists[1].value,
    "list3": lists[2].value,
    "list4": lists[3].value,
    "list5": lists[4].value, 
    "fieldOne": fields[0].value, 
    "fieldTwo": fields[1].value });
    result.innerHTML = data;
   xhr.send(data);
   xhr.onload = function (){
      if (xhr.readyState === 4 && xhr.status === 200) {
          alert(xhr.responseText);
      }
    }
   xhr.abort();
  }