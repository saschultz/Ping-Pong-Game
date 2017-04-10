//Back-End Logic:
var numberToRange = function(range) {
  var finalOutput = [];
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
  return finalOutput;
};
//Front-End Logic:
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userNumber").val());
    $("#result").empty();
    var outputs = numberToRange(userInput);
    console.log(outputs);
    // console.log(outputs);
    // outputs.forEach(function(output) {
    //   $("#result").append("<li>" + output + "</li>");
    //   console.log(outputs);
    // });
    // $("#result").text(finalOutput);
  });
});
