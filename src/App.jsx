import React from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardHome from "./pages/DashboardHome"
import BusDetails from "./pages/BusDetails"
import LocationDetails from "./pages/LocationDetails"
import BookingDetails from "./pages/BookingDetails"

const App = () => {

  return (
    <div className="flex">
      <Router>
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/bus-details" element={<BusDetails />} />
              <Route path="/location-details" element={<LocationDetails />} />
              <Route path="/booking-details" element={<BookingDetails />} />
            </Routes>
      </div>
      </Router>
    </div>
  )
}

export default App
