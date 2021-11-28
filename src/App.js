import './App.css';
import NumList from './NumList.js'
import Total from './Total.js'
import ButtonArea, {Clear, RemoveLast } from './Buttons.js'
import React, { useState, useEffect } from 'react';

function App() {
  const [numlist, updateNumlist] = useState([1, 2, 3]);

  return (
    <div className="App">
      <table class="header">
        <tr>
          <Clear updateNumlist={updateNumlist}/>
          <td class="not-clickable">
            <NumList numlist={numlist} />
            <Total numlist={numlist} />
          </td>
          <RemoveLast updateNumlist={updateNumlist}/>
        </tr>
      </table>
      <ButtonArea numlist={numlist} updateNumlist={updateNumlist} />
    </div>
  )
}

export default App;
