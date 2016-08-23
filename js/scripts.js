function Account(name) {
  this.name = name;
  this.currentBalance = 0;
};
  Account.prototype.updateBalance = function(inputtedDeposit, inputtedWithdrawal) {
    if (inputtedDeposit > 0 && inputtedWithdrawal > 0 && !isNaN(inputtedDeposit)
    && !isNaN(inputtedWithdrawal)) {
      myAccount.currentBalance += inputtedDeposit;
      myAccount.currentBalance -= inputtedWithdrawal;
    }  else if(inputtedDeposit > 0 && !isNaN(inputtedDeposit)){
      myAccount.currentBalance += inputtedDeposit;
    } else if(inputtedWithdrawal > 0 && !isNaN(inputtedWithdrawal)){
      myAccount.currentBalance -= inputtedWithdrawal;
    } else {
      myAccount.currentBalance = currentBalance;
    }
    return myAccount.currentBalance.toFixed(2);
};
// Account.prototype.deposit = function() {
//
// }

var myAccount = new Account("",0);

$(document).ready(function() {
  $("#addNewAccount").click(function(event) {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedInitialDep = parseFloat($("input#initialDeposit").val());

    myAccount.name = inputtedName;
    myAccount.currentBalance = inputtedInitialDep;
    $("#setUP").hide();
  });

  $("#changeInput").submit(function(event) {
    event.preventDefault();
    var inputtedDeposit = parseFloat($("input#deposit").val());
    var inputtedWithdrawal = parseFloat($("input#withdrawal").val());
    $("p").text("$" + myAccount.updateBalance(inputtedDeposit, inputtedWithdrawal));
    $("input").val("");
  });


});
