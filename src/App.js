import './App.css';
import { useState } from 'react';

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const [disabled, setDisabled] = useState(false)
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div className="App">
      <button 
        disabled={disabled}
        style={{backgroundColor: disabled ? 'gray' : buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}>
        Change to {newButtonColor}
      </button>
      <br />
      <input 
        type="checkbox" 
        id="disable-button-checkbox" 
        onChange={() => setDisabled(!disabled)} 
        />
        <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
