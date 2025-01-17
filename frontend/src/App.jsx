import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import About from './pages/About'
import Contact from './pages/Contact'
import MyAppointments from './pages/MyAppointments'
import BookAppointment from './pages/BookAppointment'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:specialty' element={<Doctors/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/myprofile' element={<MyProfile/>} />
        <Route path='/login' element={<MyProfile/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/myappointments' element={<MyAppointments/>} />
        <Route path='/bookappointments' element={<BookAppointment/>} />
        
     </Routes>
    </div>
  )
}

export default App