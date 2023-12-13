"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0 ) {
    return arr;
  }
  if (discriminant === 0) {
    arr.push(-b / (2 * a));
    return arr;
  }
  if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
    return arr;
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyInterestRate = percent / 100 / 12;
  let debt = amount - contribution;
  let monthlyPayment = debt * (monthlyInterestRate + (monthlyInterestRate / ((((1 + monthlyInterestRate)**countMonths) - 1))));  
  let totalAmount = Number((monthlyPayment * countMonths).toFixed(2));
  return totalAmount;
}