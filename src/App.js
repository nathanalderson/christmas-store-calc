import './App.css';
import NumList from './NumList.js'
import Total from './Total.js'
import ButtonArea, {Clear, RemoveLast } from './Buttons.js'
import React, { useState } from 'react';

function App() {
  const [vals, setVals] = useState([]);

  return (
    <div className="App">
      <table class="header">
        <tr>
          <td rowspan="2">
            <NumList vals={vals} />
            <Total  vals={vals} />
          </td>
          <Clear setVals={setVals}/>
        </tr>
        <tr>
          <RemoveLast setVals={setVals}/>
        </tr>
      </table>
      <ButtonArea setVals={setVals} />
    </div>
  )
}

export default App;
