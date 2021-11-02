var month = 9;
var day = 6;
var year = 2000;

step1 = year - 2000;
step2 = parseInt(step1/4);
step3 = step1 + step2
step4 = 5;
step6 = step4 + step3;
step7 = day + step6;
step8 = step7;
step9 = step8 -1; //a leap year
step10 = step9 % 7;
console.log(step10);