$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("#age").val());
    const food = $("#food").val();
    const music = $("#music").val();
    const vacation = $("#vacation").val();
    const beverage = $("#beverage").val();
    let result;

    if (age > 1 && food === "tacos") {
      result = ".java";
    } else if (age > 1 && food === "pancakes" && music === "jazz") {
      result = ".python";
    } else if (age > 1 && beverage === "beer" && vacation === "mexico") {
      result = ".c";
    } else if (age > 1 && food === "rice") {
      result = ".c";
    } else {
      result = ".python";
    }
    
  $(".previous").hide();
  $(result).fadeIn(".java");
  $(result).fadeIn(".c");
  $(result).fadeIn(".python");
  });
});