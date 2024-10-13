import React, { useState, useEffect } from 'react';
import { Box, Image, Button, Flex,Text } from '@chakra-ui/react';


const images = [
  './Image/pic1.jpg',
  './Image/pic2.jpg',
  './Image/pic3.jpg',
  './Image/pic4.jpg',
  './Image/pic5.jpg',
  './Image/pic6.jpg',
  './Image/spotlight/delux.jpg',
  './Image/spotlight/delux-single-bed.jpg',
  './Image/spotlight/DSC_0606.jpg',
  './Image/spotlight/DSC_0608.jpg',
  './Image/spotlight/DSC_0615.jpg',
  './Image/spotlight/DSC_0632.jpg',
  './Image/spotlight/DSC_0695.jpg',
  './Image/spotlight/DSC_0700.jpg',
  
];

const preloadImages = (urls) => {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'image';
    document.head.appendChild(link);
  });
};

const Spotlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 3000; // Automatic loop delay (3 seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, delay);
    return () => clearInterval(interval); // Clean up on unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

 

  useEffect(() => {
    preloadImages([
      './Image/pic1.jpg',
  './Image/pic2.jpg',
  './Image/pic3.jpg',
  './Image/pic4.jpg',
  './Image/pic5.jpg',
  './Image/pic6.jpg',
  './Image/spotlight/delux.jpg',
  './Image/spotlight/delux-single-bed.jpg',
  './Image/spotlight/DSC_0606.jpg',
  './Image/spotlight/DSC_0608.jpg',
  './Image/spotlight/DSC_0615.jpg',
  './Image/spotlight/DSC_0632.jpg',
  './Image/spotlight/DSC_0695.jpg',
  './Image/spotlight/DSC_0700.jpg',
    ]);
  }, []);
            
 
  return (

    
    <Flex direction="column" h={600} id='spotlight' paddingTop={{lg:"50px",md:"30px", base:"20px"}} paddingBottom={{lg:"50px",md:"30px", base:"20px"}} paddingLeft={{lg:"100px",md:"100px", sm:"25px"}} paddingRight={{lg:"100px",md:"75px", sm:"15px"}} gap={16} bg="#f4f4f4" >
      <Text  textAlign="center" fontWeight={600} fontSize={45}>Spotlight</Text>
      <Flex position="relative" marginLeft={{lg:"100px",md:"70px", base:"30px"}} marginRight={{lg:"100px",md:"70px", base:"30px"}} height="400px" overflow="hidden" borderRadius={20} boxShadow=" 20px 20px 60px #bebebe,
               -20px -20px 60px #ffffff" bg=' #e0e0e0' >
        
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        width="100%"
        height="100%"
        objectFit="cover"
        transition="all 0.5s ease-in-out"
      />
      

      <Flex justifyContent="space-between" position="absolute" top="50%" width="100%">
        <Button
          onClick={prevSlide}
          position="absolute"
          left="0"
          transform="translateY(-50%)"
          background="rgba(0, 0, 0, 0.5)"
          color="white"
        >
          Prev
        </Button>
        <Button
          onClick={nextSlide}
          position="absolute"
          right="0"
          transform="translateY(-50%)"
          background="rgba(0, 0, 0, 0.5)"
          color="white"
        >
          Next
        </Button>
      </Flex>
    </Flex>
    </Flex>
  
  )
  
 
}



export default Spotlight