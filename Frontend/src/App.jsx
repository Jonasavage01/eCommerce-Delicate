import './assets/css/App.css';
import { useState } from 'react'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Navbar/>
      <Home></Home>

    </>
  )
}

export default App
