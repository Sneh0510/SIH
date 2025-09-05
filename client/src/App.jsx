import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import Services from './pages/Services'
import GoogleTranslate from './components/GoogleTranslate'
import QuizForm from './pages/QuizForm'

const App = () => {
  return (
    <>
      <GoogleTranslate />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/quizform' element={<QuizForm />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
