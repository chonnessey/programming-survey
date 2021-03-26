$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("#age").val());
    const food = $("#food").val();
    const music = $("#music").val();
    const vacation = $("#vacation").val();
    const beverage = $("#beverage").val();
  });
});