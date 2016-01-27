function Ticket(secondRun, matinee, discount) {
    this.secondRun = secondRun;
    this.matinee = matinee;
    this.discount = discount;
}

Ticket.prototype.price = function() {
  var startingValue = 10;

  if (this.secondRun === "true") {
    startingValue -= 2;
  }

  if (this.matinee === "true") {
    startingValue -= 2;
  }

  if (this.discount === "true") {
    startingValue -= 2;
  }
  return startingValue;
};

$(document).ready(function() {
  $("form#ticketSelect").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = $("select#movieType").val();
    var inputtedTime = $("select#time").val();
    var inputtedAge = $("select#ageRange").val();
    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    $("ul#totalCost").append("<p>$" + newTicket.price() +".00</p>");
    });
  });
