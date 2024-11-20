import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Resume from './components/Resume'

function App() {

  return (
    <div className='home'>
    <Navbar/>
    <div name="home">
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Resume/>
    </div>
    </div>
  )
}

export default App
