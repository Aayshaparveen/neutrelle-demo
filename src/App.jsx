import './App.css'
import Home from './Home';
import Navbar from './Navbar'
import OurMission from './OurMission'
import ImpactCalculator from './ImpactCalculator';
import MyGarage from './MyGarage';
// import  from './pages/SignIn';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Blog from './Blog';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Registration from './Cardeatils';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
 
  return (
   <>
   {/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"></link> */}
   <BrowserRouter>
   <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/OurMission' element={<OurMission/>} />
        <Route path='/ImpactCalculator' element={<ImpactCalculator/>} />
        <Route path='/MyGarage' element={<MyGarage/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/ContactUs' element={<ContactUs/>} />
        <Route path='/Registration' element={<Registration/>} />
        <Route  path="/MyGarage" element={<SignIn/>}/>
      <Route  path="/MyGarage/SignUp" element={<SignUp/>}/>
      </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
