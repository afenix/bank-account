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

    $("#deposit-withdraw").show();
    $(".account").show();
      $(".name").text(newAccount.name);
      $(".accountBalance").text(newAccount.balance.toFixed(2));

    $("form#deposit-withdraw").submit(function(event) {
    event.preventDefault();

    var inputDeposit = parseFloat($("input#deposit").val());
    var inputWithdrawl = parseFloat($("input#withdrawl").val());

    newAccount.deposit(inputDeposit);
    // newAccount.withdrawl(inputWithdrawl);

  debugger;

    $("input#deposit").val("");
    $("input#withdrawl").val("");

    $(".account").show();
      $(".accountBalance").text(newAccount.balance.toFixed(2));

    });
  });
});
