function calculateMoney(ticketSale) {
  if (ticketSale < 0) return "Invalid Number";
  const ticketPrice = 120;
  const janitorCost = 500;
  const stuffCost = 50 * 8;
  const totalTicketSale = ticketPrice * ticketSale;
  const totalCost = janitorCost + stuffCost;

  return totalTicketSale - totalCost;
}

function checkName(name) {
  if (typeof name !== "string") return "invalid";

  name = name.toLowerCase();
  const lastWord = name.at(-1);
  switch (lastWord) {
    case "a":
    case "y":
    case "i":
    case "e":
    case "o":
    case "u":
    case "w":
      return "Good Name";
    default:
      return "Bad Name";
  }
}

function deleteInvalids(array) {
  if (!Array.isArray(array)) return "Invalid Array";

  const refinedArray = [];
  for (const element of array) {
    if (typeof element === "number" && !isNaN(element))
      refinedArray.push(element);
  }
  return refinedArray;
}

function password(obj) {
  if (typeof obj === "object" && !Array.isArray(obj)) {
    if (
      obj.hasOwnProperty("name") &&
      obj.hasOwnProperty("birthYear") &&
      obj.hasOwnProperty("siteName")
    ) {
      let birthYearCondition = obj.birthYear.toString();
      birthYearCondition = birthYearCondition.length;
      if (birthYearCondition === 4) {
        obj.siteName = obj.siteName.at(0).toUpperCase() + obj.siteName.slice(1);
        return `${obj.siteName}#${obj.name}@${obj.birthYear}`;
      }
    }
  }
  return "invalid";
}

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
