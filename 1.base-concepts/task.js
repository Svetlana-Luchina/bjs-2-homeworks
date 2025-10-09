"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  let d = b ** 2 - 4 * a * c;

  if (d === 0) {
    arr.push(-b / (2 * a))
  }
  else if (d > 0) {
    arr.push(
      (-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)
    );
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let bodyCredit = amount - contribution;
  let percentPerMont = percent / 100 / 12;
  let amountPerMonth = bodyCredit * (percentPerMont + (percentPerMont / (((1 + percentPerMont) ** countMonths) - 1)));
  let totalAmount = amountPerMonth * countMonths;

  return Number(totalAmount.toFixed(2));
}