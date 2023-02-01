import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar'
import OurMission from './OurMission'
import ImpactCalculator from './ImpactCalculator';
import MyGarage from './MyGarage';
import Blog from './Blog';
import ContactUs from './ConactUs'
import Footer from './Footer'
// import CssTextField from './TextField';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
 
  return (
   <>
   <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path='/' element={<OurMission/>} />
        <Route path='/ImpactCalculator' element={<ImpactCalculator/>} />
        <Route path='/MyGarage' element={<MyGarage/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/ContactUs' element={<ContactUs/>} />
      </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
