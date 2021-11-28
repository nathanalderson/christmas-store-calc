const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

function getDisplayValue(num) {
  if (num < 1) {
    return Math.round(num*100) + "¢";
  } else if (num % 1 == 0) { // whole number
    return "$" + num;
  } else {
    return "$" + num.toFixed(2);
  }
}

export {
  formatter,
  getDisplayValue
}
