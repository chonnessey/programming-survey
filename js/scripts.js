$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("#age").val());
    const food = $("#food").val();
    const music = $("#music").val();
    const vacation = $("#vacation").val();
    const beverage = $("#beverage").val();

    if (age > 1 && food === "tacos") {
      $(".java").show();
    } else if (age > 1 && food === "pancakes" && music === "jazz") {
      $(".python").show();
    } else if (age > 1 && beverage === "beer" && vacation === "mexico") {
      $(".c").show();
    } else if (age > 1 && food === "rice") {
      $(".c").show();
    } else {
      $(".python").show();
    }

  });
});