//Back-End Logic:
var result = 0;
var countNumber = function(number) {
  for(var i=1; i<=number; i++) {
    result =+ i;
    alert(result)
  };
  return result;
  };
  // var output = output.forEach(function(number) {
  //   return number;
  // });


//Front-End Logic:
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = parseInt($("#userNumber").val());
    console.log(userInput);
    output = countNumber(userInput);
    $("#result").prepend("<li>" + output + "</li>");
    event.preventDefault();
  })
});
