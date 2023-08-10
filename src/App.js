import logo from './logo.svg';
import './App.css';
import React  from 'react';
import { useState } from 'react';
import { render } from '@testing-library/react';



function App() {
const [cups,setCups] = React.useState(0);
  const [dripTime, setdripTime] = React.useState('00:00:00');
  
  function increaseCups(num){
    const newTime = new Date();
    setdripTime(newTime.toLocaleString());
    setCups(cups + num);
  }
  
  function decreaseCups(num){
    setCups(cups - num);
  }
  
  function clearCups(){
    setdripTime(`ドリップされていません`);
    setCups(0);
  }
    return (
      <div className="App">
       <h1>Coffee</h1>
      <div>前回の抽出時刻</div>
      <div>{dripTime}</div>
      <p>残り{cups}杯</p>
      <button onClick={function() { decreaseCups(1); }}>-1</button>
      <button onClick={function() { decreaseCups(0.5); }}>-0.5</button>
      <div></div>
      <button onClick={function() { increaseCups(2); }}>+2</button>
      <button onClick={function() { increaseCups(4); }}>+4</button>
      <button onClick={function() { increaseCups(6); }}>+6</button>
      <button onClick={function() { increaseCups(8); }}>+8</button>
      <button onClick={function() { increaseCups(10); }}>+10</button>
      <div></div>
      <button onClick={function() { clearCups(); }}>clear</button>
      </div>
    );
  

  
}


function Plussix(prop){
    
}
