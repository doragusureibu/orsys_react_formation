import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  
  let counter =0;

  return (
    <div className="App">
      <h1>Compteur: {counter}</h1>


      <Button onButtonClick={(arg) : void => { counter++; }}>Ajout +1</Button>
      <Button bgColor='#ff0' onButtonClick={() => {}}>Clickez</Button>
      <Button onButtonClick={() => {}} color='#444' style={{textDecoration:'underline', fontWeight:'bold'}}>-1</Button>
    </div>
  );
}

export default App;
