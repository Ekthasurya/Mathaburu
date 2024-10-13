import { Box, Flex, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { IoHome } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function BasicExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
       
    <Flex style={{ fontFamily : "EB Garamond"}} w={{lg:"100%",md:"100%",base:"100%"}} justifyContent={{lg:"center",md:"space-between",base:"space-between"}} h={70} fontSize={20} bg="#2b3433" color="white" fontWeight={400} alignItems="center" alignContent="center"  paddingTop={4} position="fixed" top="0"
      left="0"
      right="0"
      px={4}
      py={3}
      zIndex="1000"
      gap={{lg:"5px",md:"none",base:"250px"}}
      shadow="md">

       <Flex >
        <img id='logo' src="./Image/logo.png" alt="logo" />
       </Flex>

        <IconButton bg="transparent" color="white"
          size="md"
          icon={ isOpen ?<IoMdClose size={20}/>:<IoMdMenu size={20}/>}
          aria-label="Open Menu"
          display={{ lg: 'none' }}
          _hover={{ bg: 'none' }}
          _active={{ bg: 'none' }}
          _focus={{ boxShadow: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

  <Flex as="nav" spacing={4} gap={6} display={{ base: 'none', lg: 'flex' }}>

       
    <a href="/#home"></a><Box p={1}><IoHome size={20} /></Box>
    <a href="/#home"> <Text>Home</Text></a>
    <a href="/#about"> <Text>About</Text></a>
    <a href="/#room"><Text>Rooms</Text></a>
    <a href="/#culture"><Text>Culture</Text></a>
    <a href="/#spotlight"><Text>Spotlight</Text></a>
    <a href="/#dyning"><Text>Dining</Text></a>
    <a href="/#offer"><Text>Offer</Text></a>
    <a href="/#booking"><Text>Inquiry</Text></a>
    <a href="/#contact"><Text>Contact Us</Text></a>
      </Flex>
    </Flex>

{isOpen ? (
  <Box p={2} display={{ lg: 'none',md:"flex",sm:"flex" }} flexDirection={{lg:"none", md:"column", sm:"column"}} bg="#2b3433" color="white" w="100%" paddingTop={75} justifyContent="center" gap={2} alignItems="center" position= "fixed"
  top={0}
  left={0}
  line-height= "50px"
   >
  <a href="/#home"><Text><IoHome size={20} /></Text></a>
  <a href="/#home"> <Text>Home</Text></a>
  <a href="/#about"> <Text>About</Text></a>
  <a href="/#room"><Text>Rooms</Text></a>
  <a href="/#culture"><Text>Culture</Text></a>
  <a href="/#spotlight"><Text>Spotlight</Text></a>
  <a href="/#dyning"><Text>Dyning</Text></a>
  <a href="/#offer"><Text>Offer</Text></a>
  <a href="/#contact"><Text>Contact Us</Text></a>
</Box>
) : null}
</Box>
  );
}

export default BasicExample;