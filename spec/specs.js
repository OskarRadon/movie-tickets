describe ("Ticket", function() {
  it("will generate a cost based on properties of Ticket", function() {
    var testTicket = new Ticket(true, true, 65);
    expect(testTicket.firstRun).to.equal(true);
    expect(testTicket.isMatinee).to.equal(true);
    expect(testTicket.age).to.equal(65);
  });
});
