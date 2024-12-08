import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CountryDetails from './pages/CountryDetails'
import Navbar from './components/Navbar'


import './App.css'

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:name' element={<CountryDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
