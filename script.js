function calculate() {
  var earnings = document.getElementById("earnings").value;
  earnings = parseInt(earnings, 10);
  
  var expense = document.getElementsByClassName("expense"); 
  var expenseLength = expense.length;
  var expenseTotal = 0;
  for(i = 0; i < expenseLength; i++) {
    expenseTotal += parseInt(expense[i].value);   
  }
  
  var income = earnings - expenseTotal;
  
  var par = document.getElementById("income");
  par.innerHTML = "Your monthly income is $" + income;
}
