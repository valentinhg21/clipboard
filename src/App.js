
import React from 'react'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './components/Header.js'
import ItemListContainer from './components/ItemListContainer.js'
function App() {
  return (
    <>
      <Header />
      <ItemListContainer greetings="Bienvenido a mi E-COMERCE"/>
    </>
  );
}

export default App;
