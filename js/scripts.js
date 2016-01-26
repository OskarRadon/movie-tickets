function Ticket(secondRun, matinee) {
    this.secondRun = secondRun;
    this.matinee = matinee;
    // this.senior = senior;
}

Ticket.prototype.price = function() {
  var startingValue = 10;

  if (this.secondRun === true) {
    startingValue -= 2;
  }
  return startingValue;
}
