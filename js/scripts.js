function Ticket(firstRun) {
    this.firstRun = firstRun;
    // this.isMatinee = isMatinee;
    // this.age = age;
}

Ticket.prototype.price = function() {
  if (this.firstRun === true) {
    return 10;
  } else {
    return 8;
  }


}

//generate price
