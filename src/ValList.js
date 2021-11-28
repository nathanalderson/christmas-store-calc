import { getDisplayValue } from './util.js'

function ValList(props) {
  const vals = props.vals.map(num => getDisplayValue(num));
  return (
    <div className="numlist-container">
      <span className="label">Items:</span>
      <span className="output">{ vals.join(", ") || "-" }</span>
    </div>
  );
}

export default ValList;
