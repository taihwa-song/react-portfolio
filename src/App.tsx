import './App.css'
import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import Principals from './components/Principals'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const color = 'teal'
  return (
    <div className="App">
      <Navigation color={color} />
      <Header color={color} />
      <About color={color} />
      <Principals color={color} />
      <Experience color={color} />
      <Projects color={color} />
      <Contact color={color} />
    </div>
  )
}

export default App
