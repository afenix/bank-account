var Bank = {
  balance: 0,
  deposit: function(amount) {
    this.balance = this.balance + amount;
  },
  withdrawl: function(amount) {
    this.balance = this.balance - amount;
  }
};


$(document).ready(function () {
  $("form#sign-up").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#name").val();
    var initialDeposit = parseFloat($("input#initial-deposit").val());
    var newAccount = Object.create(Bank);
    newAccount.name = inputName;
    newAccount.deposit(initialDeposit);

    $("input#name").val("");
    $("input#initial-deposit").val("");

    $(".deposit-withdraw").show();
    $(".results").show();
      $(".name").text(newAccount.name);
      $(".accountBalance").text(newAccount.balance.toFixed(2));

  });
});
