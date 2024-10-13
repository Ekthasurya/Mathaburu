import { Box, Flex, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { IoHome } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function BasicExample() {
  const location = useLocation();

  // Scroll to the section based on the hash in the URL when the component mounts
  useEffect(() => {
      if (location.hash) {
          const element = document.querySelector(location.hash);
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
          }
      }
  }, [location]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
       
    <Flex style={{ fontFamily : "EB Garamond"}} w={{lg:"100%",md:"100%",base:"100%"}} justifyContent={{lg:"center",md:"space-between",base:"space-between"}} h={70} fontSize={20} bg="#2b3433" color="white" fontWeight={400} alignItems="center"  paddingTop={10} position="fixed" top="0"
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

       
    < Link to="/#home"><Box p={1}><IoHome size={20} /></Box></Link>
    <Link to="/#home"> <Text>Home</Text></Link>
    < Link to="/#about"> <Text>About</Text></Link>
    <Link to="/#room"><Text>Rooms</Text></Link>
    <Link to="#culture"><Text>Culture</Text></Link>
    <Link to="/#spotlight"><Text>Spotlight</Text></Link>
    <Link to="/#dyning"><Text>Dining</Text> </Link>
    <Link to="/#offer"><Text>Offer</Text></Link>
    <Link to="/#booking"><Text>Enquiry</Text></Link>
    <Link to="/#contact"><Text>Contact Us</Text></Link>
      </Flex>
    </Flex>

{isOpen ? (
  <Box p={7} display={{ lg: 'none',md:"flex",sm:"flex" }} flexDirection={{lg:"none", md:"column", sm:"column"}} bg="#2b3433" color="white" w="100%" paddingTop={75} justifyContent="center" alignContent="center" gap={2} alignItems="center" position= "fixed"
  top={0}
  left={0}
  line-height= "50px"
   >
  < Link to="/#home"><Text><IoHome size={20} /></Text></Link>
  <Link to="/#home"> <Text>Home</Text></Link>
  < Link to="/#about"> <Text>About</Text></Link>
  <Link to="/#room"><Text>Rooms</Text></Link>
  <Link to="/#culture"><Text>Culture</Text></Link>
  <Link to="/#spotlight"><Text>Spotlight</Text></Link>
  <Link to="/#dyning"><Text>Dyning</Text></Link>
  <Link to="/#offer"><Text>Offer</Text></Link>
  <Link to="/#contact"><Text>Contact Us</Text></Link>
</Box>
) : null}
</Box>
  );
}

export default BasicExample;