import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimeComp from './TimeComp/TimeComp.jsx'
import PicComp from './PicComp/PicComp.jsx'
//import ToDoItem from './components/ToDoItem/ToDoItem';

function App() {
  return (
    <div className="App">
      <p>Place holder for the comp </p>
      <div className="PicPlacement">    
        <PicComp></PicComp>
      </div>
      <div className="TimePlacement">    
        <TimeComp></TimeComp>
      </div>

    </div>
  );
}

export default App;
