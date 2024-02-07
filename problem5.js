function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number")
    return "invalid input";

  let savings = 0;
  for (const element of arr) {
    if (element >= 3000) savings += element - (element * 20) / 100;
    else savings += element;
  }
  savings -= livingCost;
  return savings >= 0 ? savings : "earn more";
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
