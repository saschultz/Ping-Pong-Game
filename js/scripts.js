//Back-End Logic:
var countNumber = function(number) {
  for(var i=1; i<=number; i++) {
    var resultString = result =+ i;
    $("#result").prepend("<li>" + resultString + "</li>");
  };
};


//Front-End Logic:
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = parseInt($("#userNumber").val());
    var output = countNumber(userInput);
    // $("#result").prepend("<li>" + output + "</li>");
    event.preventDefault();
  })
});
