import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorName){
  return colorName.replac(/\B([A-z])\B/g, '$1');
}

function App() {

  const [buttonColor, setButtonColor]= useState('red');
  const [disabled, setDisabled  ]= useState(false);

  const newButtonColor=buttonColor === 'red' ? 'blue': 'red';

  return (
    <div>
      <button
        style={{backgroundColor:disabled?'gray':buttonColor}}
        onClick={()=>setButtonColor(newButtonColor)}
        disable={disabled}>
          Change to {newButtonColor}
      </button>
      <br/>
      <input 
      type="checkbox"
      id="disable-button-checkbox"
      defaultChecked={disabled}
      aria-checked={disabled}
      onChange={(e)=>setDisabled(e.target.checked)} 
      />
       <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
