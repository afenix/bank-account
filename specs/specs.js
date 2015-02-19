describe("Bank", function() {
  describe("deposit", function() {
    it("adds the amount to the balance", function() {
      var testBank = Object.create(Bank);
      testBank.deposit(100);
      expect(testBank.balance).to.equal(100);
    });
  });

  describe("withdrawl", function() {
    it("deducts the amount from the account balance", function() {
      var testBank = Object.create(Bank);
      testBank.withdrawl(10);
      expect(testBank.balance).to.equal(-10);
    });
  });
});
