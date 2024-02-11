import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import { Header } from './components/header/Header';
import Carrusel from './components/carrusel/Carrusel';

import './App.css'

function App() {


  return (
    <div>
      <Header />
      <br />
      <Carrusel />
      <br />
      <br />
      <Home />
      

    </div>
  )
}

export default App
