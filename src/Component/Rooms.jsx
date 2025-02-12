import { Box, Flex ,Text,Image} from '@chakra-ui/react'
import React, { useEffect } from 'react'

const preloadImages = (urls) => {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'image';
    document.head.appendChild(link);
  });
};

const Rooms = () => {

  useEffect(() => {
    preloadImages(["./Image/non-ac.jpg", "./Image/ac-and-non-ac.jpg","./Image/delux.jpg","./Image/delux-single-bed.jpg"]);
  }, []);

 


  return (
    <Box bg="#f4f4f4" paddingTop={{lg:"50px",md:"30px", base:"15px"}} paddingBottom={{lg:"50px",md:"30px", base:"15px"}}>
   <Flex  justifyContent="center" alignItems="center" direction="column"  gap={20}  borderRadius={20} id='room' marginLeft={{lg:"100px",md:"70px", base:"30px"}} marginRight={{lg:"100px",md:"70px", base:"30px"}}  boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bg="white" padding={10}  >
      <Text p={2} textAlign="center" fontSize={45} fontWeight={600}>Rooms</Text>


<div class="cards">

 <div class="card green">
    <Flex direction="column" gap={10}>
    <img src="./Image/non-ac.jpg" alt="" />
        <Box border="1px solid black" p={3}>
             <Text color="black" fontSize={{lg:"18px", md:"14px",base:"10px"}} >2 adults | 1 child below 7</Text>
                <Text color="black" fontSize={{lg:"18px", md:"14px",base:"10px"}}>Ac Cottege</Text>
             <Text color="black" fontSize={{lg:"18px", md:"14px",base:"10px"}}>Starting From 2200 ₹</Text>
        </Box>     
  </Flex>       
  </div>

    <div class="card green">
    <Flex direction="column" gap={10}>
    <img src="./Image/ac-and-non-ac.jpg" alt="" />
        <Box border="1px solid black" p={3}>
             <Text color="black"  fontSize={{lg:"18px", md:"14px",base:"10px"}}>2 adults | 1 child below 7</Text>
                <Text color="black" fontSize={{lg:"18px", md:"14px",base:"10px"}}>Non-Ac Cottege</Text>
             <Text color="black" fontSize={{lg:"18px", md:"14px",base:"10px"}}>Starting From 1600 ₹</Text>
        </Box>     
</Flex>       
    </div> 

    
    <div class="card green">
    <Flex direction="column" gap={10}>
    <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1734720782/photo2_wbqzgb.jpg" alt="" />
        <Box border="1px solid black" p={3}>
             <Text color="black" fontSize={{lg:"18px", md:"14px",base:"10px"}}>4 adults | 2 child below 7</Text>
                <Text color="black" fontSize={{lg:"18px", md:"14px",base:"10px"}}>Single Bed Mat House</Text>
             <Text color="black" fontSize={{lg:"18px", md:"14px",base:"10px"}}>Starting From 2100 ₹</Text>
        </Box>     
   </Flex>       
    </div>

  

    
    <div class="card green">
    <Flex direction="column" gap={10}>
    <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1734720757/photo1_andt5j.jpg" alt="" />
        <Box border="1px solid black" p={3}>
             <Text color="black" fontSize={{lg:"18px", md:"14px",base:"10px"}}>2 adults | 1 child below 7</Text>
                <Text color="black" fontSize={{lg:"18px", md:"14px",base:"10px"}}>Double Bed Mat House</Text>
             <Text color="black" fontSize={{lg:"18px", md:"14px",base:"10px"}}>Starting From 1400 ₹</Text>
        </Box>     
</Flex>       
    </div>
    

    
</div>

<Flex justifyContent="center" paddingBottom={10} >
  <a href="/#roomDetails">
<button class="animated-button" >
  <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span class="Abutton"  >See More</span>
  <span class="circle"></span>
  <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button></a>
</Flex>

</Flex>
</Box>
  )
}

export default Rooms