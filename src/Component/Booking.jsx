import { Box, Flex,Text } from '@chakra-ui/react'
import React from 'react'
import WhatsAppButton from './Whatapp'

const Booking = () => {
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
    
        

<Box bg="#f4f4f4" paddingTop={{lg:"50px",md:"30px", base:"10px"}} paddingBottom={{lg:"50px",md:"30px", base:"10px"}}>
<Flex justifyContent="center" borderRadius={20}  gap={{lg:"400px",md:"200px", base:"100px"}} alignItems="center" direction={{lg:"row",md:"row", base:"column"}}   id='booking' marginLeft={{lg:"100px",md:"70px", base:"30px"}} marginRight={{lg:"100px",md:"70px", base:"30px"}}  boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bg="white" padding={{lg:"20px",md:"10px", base:"20px"}} >

<div class="container" style={{display:"flex", justifyContent:"center"}}>
        <div class="icard" >
            <a class="singup">Enquiry</a>
            <div class="inputBox1">
                <input type="text" required="required"/>
                <span class="user">Name</span>
            </div>

            <div class="inputBox">
                <input type="text" required="required"/>
                <span>Email</span>
            </div>

            <div class="inputBox">
                <input type="password" required="required"/>
                <span>Message</span>
            </div>

            <button class="enter" onClick={handleWhatsAppClick}>Enter</button>

        </div>
    </div>
    <Flex direction="column" gap={4}>
        <Text fontSize={25} fontWeight={600} textAlign="center">Contact Us</Text>
        <WhatsAppButton/>
    </Flex>
    
    </Flex>
    </Box>

  )
}

export default Booking