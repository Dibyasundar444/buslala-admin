import React, { useState } from "react"
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
import Login from "./pages/Login"
import CustomerForm from "./pages/CustomerForm"
import DriverForm from "./pages/DriverForm"

const App = () => {

  const [account, setAccount] = useState({})

  console.log(account.email)

  return (
    <>
      {
        account.email == "ye_mera_hai_123" ?
        <div className="flex h-screen">
          <Router>
            <Sidebar setAccount={setAccount}/>
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
                    <Route path="/new-customer-form" element={<CustomerForm />} />
                    <Route path="/new-driver-form" element={<DriverForm />} />
                  </Routes>
            </div>
          </Router>
        </div> :
        <div>
          <Login setAccount={setAccount}/>
        </div>
      }
    </>
  )
}

export default App
