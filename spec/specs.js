describe ("Ticket", function() {
  it("will generate Ticket based on input", function() {
    var testTicket = new Ticket(true);
    expect(testTicket.secondRun).to.equal(true);
  });

  it("will generate Ticket price based on secondRun", function(){
    var testSecondRun = new Ticket(true);
    expect(testSecondRun.price()).to.equal(8);
  });

  it("will modify Ticket price based on matinee", function(){
    var testMatinee = new Ticket(true, true);
    expect(testMatinee.price()).to.equal(6);
  });

  it("will modify Ticket price based on discount", function(){
    var testMatinee = new Ticket(true, true, true);
    expect(testMatinee.price()).to.equal(4);
  });
});
