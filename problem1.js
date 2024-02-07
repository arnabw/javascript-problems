function calculateMoney(ticketSale) {
  if (ticketSale < 0) return "Invalid Number";
  const ticketPrice = 120;
  const janitorCost = 500;
  const stuffCost = 50 * 8;
  const totalTicketSale = ticketPrice * ticketSale;
  const totalCost = janitorCost + stuffCost;

  return totalTicketSale - totalCost;
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
