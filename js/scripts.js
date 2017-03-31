//Back-End Logic:


//Front-End Logic:
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = parseInt($("#userNumber").val());
    console.log(userInput);
    $("#result").prepend("<li>" + userInput + "</li>");
    event.preventDefault();
  })
});
