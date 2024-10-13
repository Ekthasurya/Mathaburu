import { Box ,Center,Flex,Text} from '@chakra-ui/react'
import React from 'react'

const Location = () => {
  return (
    <Box bg="#f4f4f4" paddingTop={{lg:"50px",md:"30px", base:"10px"}} paddingBottom={{lg:"50px",md:"30px", base:"10px"}}>
    <Flex justifyContent="center"  h={{lg:"650px",md:"650px", base:"400px"}} borderRadius={20} border="1px solid #ccc"  overflow="hidden" marginLeft={{lg:"100px",md:"70px", base:"30px"}} marginRight={{lg:"100px",md:"70px", base:"30px"}} boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bg="white" padding={{lg:"20px",md:"20px", base:"15px"}}>
        <Flex direction="column" gap={10}>
            <Text  fontSize={30} fontWeight={600} textAlign="center" >Location</Text>
       
        <Flex direction={{lg:"row",md:"column", base:"column"}} justifyContent="center" alignContent="center" alignItems="center" >
     <Box w={{lg:"600px",md:"400px", base:"280px"}} h={{lg:"400px",md:"300px", base:"150px"}}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.965152475939!2d86.06911777516798!3d23.134948979095103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5c564d5984763%3A0x6a648bda55d2aedb!2sMatha%20Buru%20Hill%20Resort!5e0!3m2!1sen!2sin!4v1728367128719!5m2!1sen!2sin"
        className='map'
        width="100%"
        height="100%"
        style={{ border: 0 ,boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:"10px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
      </Box>
      <Flex direction="column" w={{lg:"500px",md:"350px", base:"350px"}} justifyContent="center" alignItems="center" p={5}>
      <Text fontSize={{lg:"25px",md:"18px", base:"15px"}} fontWeight={600}>Matha Buru Hill Resort</Text>
         <Text fontSize={{lg:"18px",md:"15px", base:"10px"}}>FOREST, Baghmundi - Purulia Rd, SONKUPI, Matha, Purulia,</Text>
         <Text fontSize={{lg:"18px",md:"15px", base:"10px"}}> West Bengal 723152</Text>
        
      </Flex>

      </Flex>
      </Flex>
    </Flex>
    </Box>
  )
}

export default Location