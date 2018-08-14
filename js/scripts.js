$(document).ready(function() {
  var returnValues = [];
  $("#formOne").submit(function(event) {
    var countToInput = parseInt($("#count-to").val());
    var countByInput = parseInt($("#count-by").val());

    // returnValues.push(countMultiples(countToInput, countByInput));
    countMultiples(countToInput, countByInput);

    $("#countToResult").text(countToInput);
    $("#countByResult").text(countByInput);
    $("#outputResult").text(returnValues);

// Broken code
    // outputResult.forEach(function(number) {
    //   var output = number + " ";
    //   $("#outputResult").append(output);
    // })


    event.preventDefault();
  });

  function countMultiples(countTo, countBy) {
    for (var i = 1; i <= (countTo/countBy); i++) {
      returnValues.push(countBy * i);
    }
  }

});
