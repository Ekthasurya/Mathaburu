import { Box ,Flex,Text} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
     <Flex style={{ fontFamily : "EB Garamond"}} width="100%" height={19} p={5} justifyContent="center" alignItems="center" color="white" bg="#2b3433"><Text textAlign="center" >Design By PixelCrafters</Text></Flex>
  )
}

export default Footer