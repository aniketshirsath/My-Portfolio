import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Education from './Components/Education'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
