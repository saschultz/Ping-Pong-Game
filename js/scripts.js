//Back-End Logic:
var numberToRange = function(number) {
  for(var i=1; i<=number; i++) {
    var rangeString = (result =+ i);
    var rangeArray = [rangeString];
    rangeArray.forEach(function(number) {
      if (rangeArray % 15 === 0) {
        rangeArray.splice(0, 1, "Ping-Pong");
      } else if (rangeArray % 3 === 0) {
        rangeArray.splice(0, 1, "Ping");
      } else if (rangeArray % 5 === 0) {
        rangeArray.splice(0, 1, "Pong");
      } else {
      }
    });
    $("#result").prepend("<li>" + rangeArray + "</li>");
  };
};

//Front-End Logic:
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = parseInt($("#userNumber").val());
    var output = numberToRange(userInput);
    // $("#result").prepend("<li>" + resultArray + "</li>");
    event.preventDefault();
  });
});
