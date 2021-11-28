import { getDisplayValue } from './util.js'

function NumList(props) {
  const vals = props.vals.map(num => getDisplayValue(num));
  return (
    <div class="numlist-container">
      <span class="label">Items:</span>
      <span class="output">{ vals.join(", ") || "-" }</span>
    </div>
  );
}

export default NumList;
