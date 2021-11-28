function ButtonArea(props) {
  return (
    <div class="button-area">
      <table>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={1}/>
          <Button updateNumlist={props.updateNumlist} num={2}/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={3}/>
          <Button updateNumlist={props.updateNumlist} num={4}/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={5}/>
          <Button updateNumlist={props.updateNumlist} num={6}/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={7}/>
          <Button updateNumlist={props.updateNumlist} num={8}/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={9}/>
          <Button updateNumlist={props.updateNumlist} num={10}/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={11}/>
          <Button updateNumlist={props.updateNumlist} num={12}/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={13}/>
          <Button updateNumlist={props.updateNumlist} num={14}/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={15}/>
          <Button updateNumlist={props.updateNumlist} num={16}/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={17}/>
          <Button updateNumlist={props.updateNumlist} num={18}/>
        </tr>
        <tr>
          <Button updateNumlist={props.updateNumlist} num={19}/>
          <Button updateNumlist={props.updateNumlist} num={20}/>
        </tr>
      </table>
    </div>
  );
}

function Button(props) {
  return (
    <td class="button number" onClick={ () =>
        props.updateNumlist(numlist => [...numlist, props.num])
    }>
      {props.num}
    </td>
  )
}

function RemoveLast(props) {
  return (
    <td class="button removelast" onClick={ () =>
        props.updateNumlist(numlist => numlist.slice(0,-1))
    }>
      REMOVE LAST
    </td>
  )
}

function Clear(props) {
  return (
    <td class="button clear" onClick={ () =>
        props.updateNumlist([])
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
