import { getDisplayValue } from './util.js'

function ButtonArea(props) {
  return (
    <div className="button-area">
      <table>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
}

function Button(props) {
  return (
    <td className="button number" onClick={ () =>
        props.setVals(numlist => [...numlist, props.val])
    }>
      {props.display}<br/>
      <span className="value">({getDisplayValue(props.val)})</span>
    </td>
  )
}

function Other(props) {
  function clickAdd(event) {
    event.preventDefault();
    var val = parseFloat(document.getElementById("amount").value);
    if (isNaN(val)) { return; }
    props.setVals(numlist => [...numlist, val])
  }

  function clickRemove(event) {
    event.preventDefault();
    var val = parseFloat(document.getElementById("amount").value);
    if (isNaN(val)) { return; }
    props.setVals(vs => {
      var idx = vs.indexOf(val);
      if (idx !== -1) {
        return [...vs.slice(0, idx), ...vs.slice(idx+1)];
      } else {
        return vs;
      }
    })
  }

  return (
    <td className="other">
      <form>
        <label>Amount:
          <input name="amount" type="number" id="amount" />
        </label><br/>
        <button onClick={clickAdd}>Add</button>
        <button onClick={clickRemove}>Remove</button>
      </form>
    </td>
  )
}

function RemoveLast(props) {
  return (
    <td className="button removelast" onClick={ () =>
        props.setVals(numlist => numlist.slice(0,-1))
    }>
      REMOVE LAST
    </td>
  )
}

function Clear(props) {
  return (
    <td className="button clear" onClick={ () =>
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
