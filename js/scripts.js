//Back-End Logic:
var countNumber = function(number) {
  for(var i=1; i<=number; i++) {
    var resultString = (result =+ i);
    var resultArray = [resultString];
    resultArray.forEach(function(number) {
      if (resultArray % 15 === 0) {
        resultArray.splice(0, 1, "Ping-Pong");
      } else if (resultArray % 3 === 0) {
        resultArray.splice(0, 1, "Ping");
      } else if (resultArray % 5 === 0) {
        resultArray.splice(0, 1, "Pong");
      } else {
      }
    });
    $("#result").prepend("<li>" + resultArray + "</li>");
  };
};



//Front-End Logic:
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = parseInt($("#userNumber").val());
    var output = countNumber(userInput);
    // $("#result").prepend("<li>" + resultArray + "</li>");
    event.preventDefault();
  });
  // location.reload();
});
