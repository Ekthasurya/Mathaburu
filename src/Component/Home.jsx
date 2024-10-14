import { Box ,Center,Flex,Text} from '@chakra-ui/react'
import React from 'react';
<link rel="preload" href="./Image/CoverPic1.jpg" as="image"></link>


const Home = () => {
  const phoneNumber = "7384804148"; 
    const message = "Hello! I would like to chat with you.";
     // Pre-filled message
     const countryCode = "91";
  
    const handleWhatsAppClick = () => {
      const whatsappUrl = `https://wa.me/${countryCode}${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
    };
  return (
    <Flex  paddingTop={2} w="100%" h="100vh" alignItems="center" boxShadow= "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" justifyContent="center" 
    bgImage="url('./Image/CoverPic1.jpg')" _loading="lazy" bgPosition="center" bgRepeat="no-repeat" bgSize="cover"
     id='home'>
       
       <Flex direction="column" >
        <Text color="white" textAlign="center" fontWeight={600} fontSize={{lg:"22px",md:"18px",base:"25px"}}>WELCOME TO</Text>
        <Text color="white"  textAlign="center" fontWeight={600}  fontSize={{lg:"80px",md:"70px",base:"35px"}}>Matha Buru Hill Eco</Text>
        <Text color="white" textAlign="center" fontWeight={600} fontSize={{lg:"50px",md:"45px",base:"30px"}}>Resort</Text>
        <Text color="white" textAlign="center" fontWeight={600} fontSize={{lg:"30px",md:"25px",base:"18px"}}>Sonkupi</Text>
        <Flex justifyContent="center">
    <button class="enter2" onClick={handleWhatsAppClick}>Book Your Stay</button>
    </Flex>
       </Flex>
      
      </Flex>
  )
}

export default Home