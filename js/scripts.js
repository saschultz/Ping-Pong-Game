//Back-End Logic:
var finalOutput = [];
var numberToRange = function(range) {
  var range;
  for(var i=1; i<=range; i++) {
    if ((i % 15) === 0) {
      finalOutput.push("Ping-Pong");
    } else if ((i % 3) === 0) {
      finalOutput.push("Ping");
    } else if ((i % 5) === 0) {
      finalOutput.push("Pong");
    } else {
      finalOutput.push(i);
    }
  };
};
//Front-End Logic:
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $("#result").empty();
    event.preventDefault();
    var userInput = parseInt($("#userNumber").val());
    var outputs = numberToRange(userInput);
    finalOutput.forEach(function(output) {
      $("#result").append("<li>" + output + "</li>");
    });
    finalOutput = [];
    this.reset();
  });
});
