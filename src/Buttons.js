import { getDisplayValue } from './util.js'

function ButtonArea(props) {
  return (
    <div class="button-area">
      <table>
        <tr>
          <Button setVals={props.setVals} val={0.25} display="1" />
          <Button setVals={props.setVals} val={0.50} display="2" />
        </tr>
        <tr>
          <Button setVals={props.setVals} val={1} display="3, 4" />
          <Button setVals={props.setVals} val={2} display="5, 6" />
        </tr>
        <tr>
          <Button setVals={props.setVals} val={3} display="7, 8" />
          <Button setVals={props.setVals} val={4} display="9, 10" />
        </tr>
        <tr>
          <Button setVals={props.setVals} val={5} display="11, 12, 13" />
          <Button setVals={props.setVals} val={7} display="14, 15, 16, 17" />
        </tr>
        <tr>
          <Button setVals={props.setVals} val={10} display="18, 19, 20" />
          <Other setVals={props.setVals} />
        </tr>
      </table>
    </div>
  );
}

function Button(props) {
  return (
    <td class="button number" onClick={ () =>
        props.setVals(numlist => [...numlist, props.val])
    }>
      {props.display}<br/>
      <span class="value">({getDisplayValue(props.val)})</span>
    </td>
  )
}

function Other(props) {
  function clickAdd(event) {
    event.preventDefault();
    var val = parseFloat(document.getElementById("amount").value);
    if (isNaN(val)) { return; }
    console.log(val);
    props.setVals(numlist => [...numlist, val])
  }
  return (
    <td class="other">
      <form>
        <label>Amount:
          <input name="amount" type="number" id="amount" />
        </label><br/>
        <button onClick={clickAdd}>Add</button>
      </form>
    </td>
  )
}

function RemoveLast(props) {
  return (
    <td class="button removelast" onClick={ () =>
        props.setVals(numlist => numlist.slice(0,-1))
    }>
      REMOVE LAST
    </td>
  )
}

function Clear(props) {
  return (
    <td class="button clear" onClick={ () =>
        props.setVals([])
    }>
      CLEAR ALL
    </td>
  )
}

export default ButtonArea;
export {
  Clear,
  RemoveLast
}
