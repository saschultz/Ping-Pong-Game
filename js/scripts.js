//Back-End Logic:


//Front-End Logic:
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = $("#userNumber").val();
    console.log(userInput);
    event.preventDefault();
  })
});
