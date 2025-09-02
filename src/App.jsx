import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
 import { ToastContainer, toast } from 'react-toastify';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './Footer';
import Contact from './components/Contact';
import Education from './components/Education';
function App() {


  return (
    <>
    <ToastContainer position='top-center' />
      <Header />
     <Hero />
     <About/>
     <Skills/>
     <Projects/>
     <Education/>
     <Contact/>
     <Footer/>
     

      
    </>
  )
}

export default App
