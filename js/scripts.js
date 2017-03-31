//Back-End Logic:
var countNumber = function(number) {
  for(var i=1; i<=number; i++) {
    var resultString = result =+ i;
    $("#result").prepend("<li>" + resultString + "</li>");
    console.log(resultString);
    if (resultString % 3 === 0) {
      alert("There is a number divisible by three!")
    } else {

    }
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
