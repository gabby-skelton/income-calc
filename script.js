function calculate() {
  var earnings = document.getElementById("earnings").value;
  earnings = parseInt(earnings, 10);

  var expense = document.getElementsByClassName("expense");
  var expenseLength = expense.length;
  var expenseTotal = 0;
  for(i = 0; i < expenseLength; i++) {
    console.log(i);
    var newExpValue = expense[i].value;

    if(newExpValue == "") {
      console.log("no value");
      newExpValue = 0;
    }
    console.log(newExpValue);
    expenseTotal += parseInt(newExpValue);
  }

  var income = earnings - expenseTotal;

  var par = document.getElementById("income");
  par.innerHTML = "Your monthly income is $" + income + ".";
}
