function Ticket(secondRun, matinee, discount) {
    this.secondRun = secondRun;
    this.matinee = matinee;
    this.discount = discount;
}

Ticket.prototype.price = function() {
  var startingValue = 10;

  if (this.secondRun === true) {
    startingValue -= 2;
  }

  if (this.matinee === true) {
    startingValue -= 2;
  }

  if (this.discount === true) {
    startingValue -= 2;
  }
  return startingValue;
}
