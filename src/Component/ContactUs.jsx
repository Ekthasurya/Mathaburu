import React from 'react'
import { Box,Flex,Text,Button } from '@chakra-ui/react'
import { FaLocationDot, FaTwitter, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { FaFacebookSquare, FaMobileAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiInstagramFill } from 'react-icons/ri'
import WhatsAppButton from './Whatapp'

const ContactUs = () => {
  return (
    <Flex h={{lg:"600px",md:"820px",base:"820px"}} style={{ fontFamily : "EB Garamond"}}  bgImage="url('./Image/footer1.jpg')" bgPosition="center" bgRepeat="no-repeat" bgSize="cover"
        id='contact' direction="column" gap={10}>
          <Text fontSize={45} fontWeight={600}>The Matha Buru</Text>
          <Flex direction={{lg:"row",md:"column",base:"column"}}  justifyContent="center" alignItems="center" gap={{lg:"150px",md:"10px",base:"20px"}}>

            <Flex direction="column" border="1px solid" p={5} w={{lg:"300px",md:"250px",base:"200px"}}  h={{lg:"250px",md:"230px",base:"220px"}} gap={3}>
              <Text fontSize={{lg:"25px",md:"25px",base:"18px"}} fontWeight={600}>Reservations Office</Text>
              <Flex gap={2}><FaLocationDot size={20}/>
               <Box>
               <Text fontSize={ {lg:"16px",md:"14px",base:"14px"}}> Matha FOREST, Baghmundi - Purulia Rd, SONKUPI, Matha, Purulia, West Bengal 723152</Text>
              </Box>
              </Flex>
              
            </Flex>
            
            <Flex direction="column" border="1px solid" p={5} w={{lg:"300px",md:"250px",base:"200px"}} h={{lg:"250px",md:"230px",base:"230px"}} gap={3}>
              <Text  fontWeight={600} fontSize={ {lg:"25px",md:"25px",base:"18px"}}>Office Hours</Text>
              <Box>
                <Text fontSize={ {lg:"16px",md:"14px",base:"14px"}}>24/7 Availability</Text>
                <Text fontSize={ {lg:"16px",md:"14px",base:"14px"}}>Feel free to contact us anytime!</Text>
              </Box>
              <Flex gap={1} > <Box p={1}><FaMobileAlt size={20}   /></Box> <Text  fontSize={ {lg:"16px",md:"14px",base:"14px"}}>7384804148</Text></Flex>
              <Flex gap={1}><Box p={1}><FaMobileAlt size={20}   /></Box> <Text fontSize={ {lg:"16px",md:"14px",base:"14px"}}>7908586811</Text></Flex>
            <a href="mailto:bikashchandramahato9@gmail.com">
      <Flex gap={2}>
        <Box p={1}>
          <MdEmail
            size={15}
            color={{ lg: "black", md: "#f4f4f4", base: "#f4f4f4" }}
          />
        </Box>
        <Text
          color={{ lg: "black", md: "#f4f4f4", base: "#f4f4f4" }}
          fontSize={{ lg: "14px", md: "8px", base: "8px" }}
        >
          bikashchandramahato9@gmail.com
        </Text>
      </Flex>
    </a>
            </Flex>

             <Flex direction="column" border="1px solid" p={5} w={{lg:"300px",md:"250px",base:"200px"}} h={{lg:"250px",md:"230px",base:"220px"}} gap={10}>
                <Text  fontWeight={600} color={{lg:"black",md:"#f4f4f4",base:"#f4f4f4"}} fontSize={ {lg:"25px",md:"25px",base:"18px"}}>Get Social</Text>
                <Flex justifyContent="center" gap={{lg:"5px",md:"2px",base:"2px"}}>
               <a href="https://youtube.com/@mathaburuhillecoresort?si=--Q2kcJiLIRYGMFN"><FaYoutube size={40} color='red'/></a> 
               <a href="https://www.facebook.com/share/T7P4FA7Lr7btkmrn/?mibextid=qi2Omg"><FaFacebookSquare size={40} color='blue'/></a> 
               <Box ><WhatsAppButton /></Box> 
             <a href="https://www.instagram.com/mathaburuhillecoresort?igsh=MTkwdmRyeDdjcGpyeQ=="><RiInstagramFill size={40} color='E4405F' /></a>   
                </Flex>
                <Button>Tag us in your Photos!</Button>
             </Flex>
          </Flex>
    </Flex>
  )
}

export default ContactUs