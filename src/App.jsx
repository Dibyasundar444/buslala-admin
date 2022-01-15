import React from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardHome from "./pages/DashboardHome"
import BusDetails from "./pages/BusDetails"
import LocationDetails from "./pages/LocationDetails"
import BookingDetails from "./pages/BookingDetails"
import ManageCustomers from "./pages/ManageCustomers"
import ManageDrivers from "./pages/ManageDrivers"
import ManageSubadmin from "./pages/ManageSubadmin"
import ManageSource from "./pages/ManageSource"
import ManageDestination from "./pages/ManageDestination"
import ManageFare from "./pages/ManageFare"
import ManageRoutes from "./pages/ManageRoutes"

const App = () => {

  return (
    <div className="flex h-screen">
      <Router>
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/bus-details" element={<BusDetails />} />
              <Route path="/location-details" element={<LocationDetails />} />
              <Route path="/booking-details" element={<BookingDetails />} />
              <Route path="/manage-customers" element={<ManageCustomers />} />
              <Route path="/manage-drivers" element={<ManageDrivers />} />
              <Route path="/manage-subadmin" element={<ManageSubadmin />} />
              <Route path="/manage-source" element={<ManageSource />} />
              <Route path="/manage-destination" element={<ManageDestination />} />
              <Route path="/manage-fare" element={<ManageFare />} />
              <Route path="/manage-routes" element={<ManageRoutes />} />
            </Routes>
      </div>
      </Router>
    </div>
  )
}

export default App
