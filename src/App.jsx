import './App.css'
import Navbar from './Component/Navbar'
import {  Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import RoomDetails from './Component/RoomDetails';
import ContactUs from './Component/ContactUs';
import Footer from './Component/Footer';

function App() {
 
  return (
    <>
     <Navbar/>
        <Routes >
        <Route path='/' element={<HomePage/>}/>
        <Route path='/roomDetails' element={<RoomDetails/>}/>
        </Routes>
      <ContactUs />
      <Footer/>
    </>
  )
}

export default App
