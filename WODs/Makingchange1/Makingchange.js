//amount total
amount = 37;
//total quarters
quarters = parseInt(amount/.25);
//total dimes + leftover
leftover = amount%25;
dimes = parseInt(leftover/.10)
//total nickles + leftover
leftover = amount%10
nickles = parseInt(leftover/.05)
//total pennies
leftover = amount%.05
pennies = parseInt(leftover/.01)
