import Header from './components/Header/Header.js';
import Subheader from './components/Subheader/Subheader.js';
import  Main from './components/Content/Main.js';
import React,{ useState } from 'react';

import './App.css';

function App(props) {
  const [cartCounter,setCartCounter]=useState(100);
  return (
    <>
    <Header cartCounter= {cartCounter}  setCartCounter={setCartCounter} />
    <Subheader />
    <Main cartCounter= {cartCounter}  setCartCounter={setCartCounter}/>
    </>
      
  );
}

export default App;
