import Header from './components/header'
import Perfil from './components/perfil'
import Apresentaçao from './components/aprentaçao'
import Skills from './components/skills'
import Formaçao from './components/formaçao'
import Projeto from './components/projeto'
import Footer from './components/footer'
import { useState } from 'react'
import './index.css'

function App(){

  const [darkMode, setDarkMode] = useState(false)

  return(
    <div className={darkMode ? "dark" : ""}>
      <Header  darkMode={darkMode}  setDarkMode={setDarkMode}/>
        <main>
          <Perfil/>
          <Apresentaçao/>
          <Skills/>
          <Formaçao/>
          <Projeto/>
        </main>
      <Footer/>
    </div>
  )
}

export default App
