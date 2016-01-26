function Ticket(firstRun, isMatinee) {
    this.firstRun = firstRun;
    this.isMatinee = isMatinee;
    // this.age = age;
}

Ticket.prototype.price = function() {
  var startingValue = 10;
  if (this.firstRun === true) {
    return startingValue;
  } else {
    return (startingValue - 2);
  }
}
