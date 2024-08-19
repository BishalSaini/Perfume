import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Collection from './components/Collection'
import Signature_Collection from './components/Signature_Collection'
import Milestone from './components/Milestone'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'


function App() {
  return (
   <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased'> 
   <Navbar/> 
   <HeroSection /> 
   <About /> 
   <Collection /> 
   <Signature_Collection /> 
   <Milestone/>  
   <Testimonials /> 
   <ContactForm /> 
   <Footer/>
   </main> 
    
  )
}

export default App
