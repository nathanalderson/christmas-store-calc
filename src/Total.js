function Total(props) {
  const values = [
    0.25, 0.50, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 7, 7, 7, 7, 10, 10, 10
  ];

  function add(accumulator, a) {
    return accumulator + values[a-1];
  }

  const sum = props.numlist.reduce(add, 0);

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <div class="total-container">
      <span class="output">{ formatter.format(sum) }</span>
    </div>
  );
}

export default Total;
