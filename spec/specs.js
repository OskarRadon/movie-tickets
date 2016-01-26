describe ("Ticket", function() {
  it("will generate Ticket based on input", function() {
    var testTicket = new Ticket(true);
    expect(testTicket.secondRun).to.equal(true);
    // expect(testTicket.matinee).to.equal(true);
    // expect(testTicket.s).to.equal(65);
  });

  it("will generate Ticket price based on firstRun", function(){
    var testSecondRun = new Ticket(true);
    expect(testSecondRun.price()).to.equal(8);
  });

  // it("will modify Ticket price based on isMatinee", function(){
  //   var testMatinee = new Ticket(true, true);
  //   expect(testMatinee.price()).to.equal(8);
  // });
  //
  // it("will modify Ticket price based on age", function(){
  //
  // });
});
