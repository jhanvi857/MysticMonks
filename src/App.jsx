import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import CTA from './CTA'
import Login from './Login';
import Signup from './SignUp';
import Homepage from './Homepage';
import Monasteries from './Monasteries';
import Footer from './Footer';
import MapView from './MapView';
import TourismTab from './TourismTab';
import EventsTab from './EventsTab';
import HotelsPage from './HotelsPage';
import TravelPlanner from './TravelPlanner';
import PanoramaViewer from './VirtualTour';
function App() {
  return (
    <>
    <Routes>
            <Route path="/" element={<CTA />} />
            <Route path="/tour" element={<PanoramaViewer />} />
            <Route path="/tour/:name" element={<PanoramaViewer />} />
            {/* <Route path="/home" element={<Homepage />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/monasteries" element={<Monasteries />} />
            <Route path="/map" element={<MapView />} />
            {/* <Route path="/travel-tourism" element={<TourismTab />} /> */}
            <Route path="/travel-tourism" element={<TravelPlanner />} />
            <Route path="/events" element={<EventsTab />} />
            <Route path="/hotels" element={<HotelsPage />} />
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
