import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import CTA from './CTA'
import Login from './Login';
import Signup from './SignUp';
import Homepage from './Homepage';
import Monasteries from './Monasteries';
import Footer from './Footer';
function App() {
  return (
    <>
    <Routes>
            <Route path="/" element={<CTA />} />
            {/* <Route path="/home" element={<Homepage />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/monasteries" element={<Monasteries />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
          </Routes>
      {/* <CTA/>
      <Login/> */}
      <Navbar/>
      <Footer/>
    </>
  )
}

export default App;
