import React from 'react'
import Home from '../Component/Home'
import ContactUs from '../Component/ContactUs'
import About from '../Component/About'
import Rooms from '../Component/Rooms'
import Culture from '../Component/Culture'
import Spotlight from '../Component/Spotlight'
import Dyning from '../Component/Dyning'
import Offer from '../Component/Offer'
import { Box } from '@chakra-ui/react'
import Booking from '../Component/Booking'
import Location from '../Component/Location'

const HomePage = () => {
  return (
    <Box  style={{ fontFamily : "EB Garamond"}} >
     <Home/>
     <About/>
     <Rooms/>
     <Culture/>
     <Spotlight/>
     <Dyning/>
     <Offer/>
     <Location/>
     <Booking/>
    </Box>
  )
}

export default HomePage