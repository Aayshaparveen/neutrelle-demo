import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import OurMission from "./OurMission";
import ImpactCalculator from "./ImpactCalculator";
import MyGarage from "./MyGarage";
import ServicePage from "./ServicePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Cardeatils from "./Cardeatils";
import KnowImpact from "./pages/KnowImpact";
import Tem from "./pages/Tem";
import Userview from "./Userview";
import Userdata from "./pages/Userdata";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurMission" element={<OurMission />} />
          <Route path="/ImpactCalculator" element={<ImpactCalculator />} />
          <Route path="/MyGarage" element={<MyGarage />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Cardeatils" element={<Cardeatils />} />
          <Route path="/pages/SignIn" element={<SignIn />} />
          <Route path="/pages/SignUp" element={<SignUp />} />
          <Route path="/pages/KnowImpact"element={<KnowImpact/>} />
          <Route path="/ServicePage" element={<ServicePage />} />
          <Route path="/pages/Tem" element={<Tem/>}/>
          <Route path="/pages/Userdata" element={<Userdata/>}/>
          <Route path="/Userview" element={<Userview/>}/>

        </Routes>
       
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
