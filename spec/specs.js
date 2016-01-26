describe ("Ticket", function() {
  it("will generate Ticket based on input", function() {
    var testTicket = new Ticket(true);
    expect(testTicket.firstRun).to.equal(true);
    // expect(testTicket.isMatinee).to.equal(true);
    // expect(testTicket.age).to.equal(65);
  });

  it("will generate Ticket price based on firstRun", function(){
    var testFirstRun = new Ticket(true);
    expect(testFirstRun.price()).to.equal(10);
  });

  // it("will modify Ticket price based on isMatinee", function(){
  //
  // });
  //
  // it("will modify Ticket price based on age", function(){
  //
  // });
});
