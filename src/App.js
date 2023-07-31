import React, { useState } from 'react';
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleCalculate = () => {
    let result = 0;

    if (value.includes("+")) {
      const operands = value.split("+");
      result = Number(operands[0]) + Number(operands[1]);
    } else if (value.includes("-")) {
      const operands = value.split("-");
      result = Number(operands[0]) - Number(operands[1]);
    } else if (value.includes("*")) {
      const operands = value.split("*");
      result = Number(operands[0]) * Number(operands[1]);
    } else if (value.includes("/")) {
      const operands = value.split("/");
      result = Number(operands[0]) / Number(operands[1]);
    }

    setValue(result.toString());
  };

  const handleClear = () => {
    setValue("");
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };

  const press = (e) => { setValue(value + e.target.value)};

  return (
    <div className='container'>
      <div className='calculator'>
        <form action=''>
          <div className='display'>
            <input type='text' value={value} onChange={handleChange} />
          </div>
          <div>
            <input type='button' value='AC' onClick={handleClear} />
            <input type='button' value='DE' onClick={handleDelete} />
            <input type='button' value='.' onClick={press} />
            <input type='button' value='/' onClick={press} />
          </div>
          <div>
            <input type='button' value='7' onClick={press} />
            <input type='button' value='8' onClick={press} />
            <input type='button' value='9' onClick={press} />
            <input type='button' value='*' onClick={press} />
          </div>
          <div>
            <input type='button' value='4' onClick={press} />
            <input type='button' value='5' onClick={press} />
            <input type='button' value='6' onClick={press} />
            <input type='button' value='+' onClick={press} />
          </div>
          <div>
            <input type='button' value='1' onClick = {press} />
            <input type='button' value='2' onClick={press} />
            <input type='button' value='3' onClick={press} />
            <input type='button' value='-' onClick={press} />
          </div>
          <div>
            <input type='button' value='00' onClick={press} />
            <input type='button' value='0' onClick={press} />
            <input type='button' value='=' className='equal' onClick={handleCalculate} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
