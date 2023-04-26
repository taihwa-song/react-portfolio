import React from 'react'
import logo from './logo.svg'
import './App.css'
import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import Principals from './components/Principals'
import Experience from './components/Experience'

function App() {
  const color = 'teal'
  return (
    <div className="App">
      <Navigation color={color} />
      <Header color={color} />
      <About color={color} />
      <Principals color={color} />
      <Experience color={color} />
    </div>
  )
}

export default App
