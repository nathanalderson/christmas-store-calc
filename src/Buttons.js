function ButtonArea(props) {
  return (
    <div class="button-area">
      <table>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={1} color="green"/>
          <Button updateNumlist={props.updateNumlist} num={11} color="green"/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={2} color="red"/>
          <Button updateNumlist={props.updateNumlist} num={12} color="green"/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={3} color="green"/>
          <Button updateNumlist={props.updateNumlist} num={13} color="green"/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={4} color="green"/>
          <Button updateNumlist={props.updateNumlist} num={14} color="red"/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={5} color="red"/>
          <Button updateNumlist={props.updateNumlist} num={15} color="red"/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={6} color="red"/>
          <Button updateNumlist={props.updateNumlist} num={16} color="red"/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={7} color="green"/>
          <Button updateNumlist={props.updateNumlist} num={17} color="red"/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={8} color="green"/>
          <Button updateNumlist={props.updateNumlist} num={18} color="green"/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={9} color="red"/>
          <Button updateNumlist={props.updateNumlist} num={19} color="green"/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={10} color="red"/>
          <Button updateNumlist={props.updateNumlist} num={20} color="green"/>
        </tr>
      </table>
    </div>
  );
}

function Button(props) {
  return (
    <td class={`button number ${props.color}`} onClick={ () =>
        props.updateNumlist(numlist => [...numlist, props.num])
    }>
      {props.num}
    </td>
  )
}

function RemoveLast(props) {
  return (
    <td class="button removelast" colspan="2" onClick={ () =>
        props.updateNumlist(numlist => numlist.slice(0,-1))
    }>
      REMOVE LAST
    </td>
  )
}

function Clear(props) {
  return (
    <td class="button clear" colspan="2" onClick={ () =>
        props.updateNumlist([])
    }>
      CLEAR
    </td>
  )
}

export default ButtonArea;
export {
  Clear,
  RemoveLast
}
