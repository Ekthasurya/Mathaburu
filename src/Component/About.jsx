import { Box,Flex,Text } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react'
import { Button } from 'react-bootstrap'
<link rel="preload" href="./Image/AboutUs.jpg" as="image"></link>

const About = () => {
  return (
    <Box bg="#f4f4f4" paddingTop={{lg:"50px",md:"30px",base:"15px"}} paddingBottom={{lg:"50px",md:"30px",base:"15px"}}>
    <Flex h={{lg:"600px",md:"450px",base:"300"}}  borderRadius={20} id='about' justifyContent="space-between" gap={{lg:"20px",md:"16px", base:"12px"}} marginLeft={{lg:"100px",md:"70px", base:"30px"}} marginRight={{lg:"100px",md:"70px", base:"30px"}}  boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bg="white" padding={{lg:"20px",md:"10px", base:"10px"}}  >
      <Flex  direction="column" justifyContent="center" alignContent="center">
<div class="card1">
  <img className='aboutImg' style={{borderRadius:"10px"}} src="./Image/AboutUs.jpg" alt="" />
</div>
      </Flex>
      <Flex direction="column"  justifyContent="center"  gap={{lg:"10px",md:"8px", base:"5px"}}>
         <Text textAlign="center" fontWeight={700} fontSize={{lg:"30px",md:"25px", base:"18px"}} >About Us</Text>
         <Text fontSize={{md:"14px",base:"10px"}}>
         Welcome to Matha Buru Eco Hill Resort, located in the serene hills of Purulia, West Bengal. Our resort offers luxurious accommodations, eco-friendly practices, and exceptional hospitality, all amidst breathtaking natural landscapes. Whether you're here for relaxation, adventure, or business, we provide a perfect blend of comfort and elegance. Experience tranquility, indulge in delicious cuisine, and explore nature at Matha Buru Eco Hill Resort—your ideal escape from the everyday.</Text>
      </Flex>
    </Flex>
    </Box>
  )
}

export default About