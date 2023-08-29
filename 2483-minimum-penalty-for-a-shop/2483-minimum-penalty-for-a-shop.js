/**
 * @param {string} customers
 * @return {number}
 */
const bestClosingTime = (customers) => {
  let visitor = 0, maxVisitor = 0, maxHour = -1;

  for (let i = 0; i < customers.length; i++) {
    if (customers[i] === "Y") visitor++;
    else visitor--;
    
    if (visitor > maxVisitor) {
      maxVisitor = visitor;
      maxHour = i;
    }
  }

  return maxHour + 1;
};