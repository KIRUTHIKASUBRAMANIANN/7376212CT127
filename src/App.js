import React from 'react';
import si from './si.png';
import './App.css'; 

function App() {
  return (
    <div className='container'>
      <div className='header'>
        <div type='text'>
          <h1>Sign up</h1>
        </div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src={si} alt='' />
          <div type='text'>
            <label>Name</label>
          </div>
          <div type='text'>
            <input type='text'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;