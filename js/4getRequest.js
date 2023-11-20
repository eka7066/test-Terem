$(document).ready(function () {
  function submitForm() {
    let data = JSON.stringify($("#form1").serializeArray());
    postDataOnPage(data);
    return data;
  }

  function postDataOnPage(data) {
    const result = document.querySelector('.result');
    result.innerHTML = data;
  }

  $("#form1").on("submit", function (e) {
    e.preventDefault();
    $.ajax({
      type: "GET",
      url: "./json.php",
      data: submitForm(),
      success: function (data) {
        alert(data);
      },
    });
    return false;
  });
});