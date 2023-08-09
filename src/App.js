import logo from './logo.svg';
import './App.css';
import React  from 'react';
import { useState } from 'react';
import { render } from '@testing-library/react';



function App() {

  class RestCup extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        cups: 0
      };
    }
  
    Plus(prop){
      this.setState(prevState =>({
        cups: prevState.cups + prop
      }));
    }
    
  }

  const cup = useState(0);

  render();{
    return (
      <div className="App">
       <h1>Coffee</h1>
       <div>SetTime</div>
       <div>残り{cup}杯です</div>
       <button onClick={Minusone}>-1</button>
       <button onClick={Minushalf}>-0.5</button>
       <div></div>
       <button onClick={this.Plus(2)}>+2</button>
       <button onClick={Plusfour}>+4</button>
       <button onClick={Plussix}>+6</button>
       <button onClick={Pluseight}>+8</button>
       <button onClick={Plusten}>+10</button>
      </div>
    );
  }

  
}

function Plustwo(prop){
  prop = prop + 2
  
}

function Plusfour(prop){
    
}

function Plussix(prop){
    
}

function Pluseight(prop){
    
}

function Plusten(prop){
    
}

function Minusone(prop){
    
}

function Minushalf(prop){
    
}

function clear(prop){
    
}

export default App;
