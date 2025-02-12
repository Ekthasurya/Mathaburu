import { Box, Flex,Grid,Text } from '@chakra-ui/react'
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

const Offer = () => {
    useEffect(() => {
        preloadImages([
         "./Image/spotlight/DSC_0608.jpg",
         "./Image/Single-Bed/delux.jpg",
         "./Image/parking.jpg",
         "./Image/roomservice.jpg",
         "./Image/tourguide.jpg",
         "./Image/carService.webp",
         "https://www.giggsmeat.com/wp-content/uploads/2021/04/NohFpw9UaY-min.jpg",
         "./Image/bonfire.jpg"
        ]);
      }, []);
  return (
    <Box bg="#f4f4f4" paddingTop={{lg:"50px",md:"30px", base:"10px"}} paddingBottom={{lg:"50px",md:"30px", base:"10px"}}>
    <Flex direction="column" borderRadius={20} gap={5} id='offer'   marginLeft={{lg:"100px",md:"70px", base:"30px"}} marginRight={{lg:"100px",md:"70px", base:"30px"}}   boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bg="white" padding={20}>
        <Text textAlign="center" fontWeight={600} fontSize={{lg:"45px",md:"30px", base:"20px"}}>Our Offerings</Text>

<Flex justifyContent="center">
 <Grid  templateColumns={{lg:'repeat(4, 1fr)',md:'repeat(2, 1fr)',base:'repeat(2, 1fr)'}}  gap={{lg:"14px",md:"14px", base:"8px"}}>
 
<Flex direction="column" gap={3}>
<div class="Ocard">
    <img src="./Image/spotlight/DSC_0608.jpg" className='Oimg'  alt="" />
</div>
<Text textAlign="center">Mini Childrens Park</Text>
</Flex>
  

<Flex direction="column" gap={3}>
<div class="Ocard">
    <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1734720824/photo4_qdsaql.jpg" className='Oimg' alt="" />
</div>
<Text textAlign="center">Free Drivers Room</Text>
</Flex>

<Flex direction="column" gap={3}>
<div class="Ocard">
    <img src="./Image/parking.jpg" className='Oimg' alt="" />
</div>
<Text textAlign="center">Car Parking</Text>
</Flex>

<Flex direction="column" gap={3}>
<div class="Ocard">
    <img src="./Image/roomservice.jpg" className='Oimg' alt="" />
</div>
<Text textAlign="center">24 x 7 Room Service</Text>
</Flex>

<Flex direction="column" gap={3}>
<div class="Ocard">
    <img src="./Image/tourguide.jpg" className='Oimg' alt="" />
</div>
<Text textAlign="center">Tour Guide</Text>
</Flex>

<Flex direction="column" gap={3}>
<div class="Ocard">
    <img src="./Image/carService.webp" className='Oimg' alt="" />

</div>
<Text textAlign="center">Car Service</Text>
</Flex>

<Flex direction="column" gap={3}>
<div class="Ocard">
    <img src="https://www.giggsmeat.com/wp-content/uploads/2021/04/NohFpw9UaY-min.jpg" className='Oimg' alt="" />
</div>
<Text textAlign="center">Barbique</Text>
</Flex>

<Flex direction="column" gap={3}>
<div class="Ocard">
    <img src="./Image/bonfire.jpg" className='Oimg' alt="" />
</div>
<Text textAlign="center">Bonfire</Text>
</Flex>

</Grid>
</Flex>



    </Flex>
    </Box>
  )
}

export default Offer