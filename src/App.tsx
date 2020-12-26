import React from 'react';
import './App.css';
import Body from './Body';
import Header from './Header';

function App() {
  return (
    <div className="container">
      <Header name='somename'/>
      
      <Body />
    </div>
  );
}

export default App;
