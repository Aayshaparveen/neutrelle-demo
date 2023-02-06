import './App.css'
import Navbar from './Navbar'
import OurMission from './OurMission'
import ImpactCalculator from './ImpactCalculator';
import MyGarage from './MyGarage';
import Blog from './Blog';
import ContactUs from './ConactUs'
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from './Registration';
function App() {
 
  return (
   <>
   {/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"></link> */}
   <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path='/' element={<OurMission/>} />
        <Route path='/ImpactCalculator' element={<ImpactCalculator/>} />
        <Route path='/MyGarage' element={<MyGarage/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/ContactUs' element={<ContactUs/>} />
      </Routes>
      <Registration/>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
