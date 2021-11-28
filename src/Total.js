import { formatter } from './util.js'

function Total(props) {
  function add(accumulator, a) {
    return accumulator + a;
  }

  const sum = props.vals.reduce(add, 0);

  return (
    <div className="total-container">
      <span className="output">{ formatter.format(sum) }</span>
    </div>
  );
}

export default Total;
