function NumList(props) {
  return (
    <div class="numlist-container">
      <span class="label">Items:</span>
      <span class="output">{ props.numlist.join(", ") || "-" }</span>
    </div>
  );
}

export default NumList;
