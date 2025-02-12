import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, HStack, Image, SimpleGrid, VStack,Text } from '@chakra-ui/react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { SiTicktick } from 'react-icons/si';
import { base } from 'framer-motion/client';

const preloadImages = (urls) => {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'image';
    document.head.appendChild(link);
  });
};

const images = [
  "./Image/Ac/ac-and-non-ac.jpg",
  "./Image/Ac/DSC_0615.jpg",
  "./Image/Ac/DSC_0635.jpg",
  "./Image/Ac/DSC_0657.jpg",
  "./Image/Ac/DSC_0659.jpg",
  "./Image/Ac/DSC_0660.jpg",
  "./Image/Ac/DSC_0662.jpg",
  "./Image/Ac/DSC_0663.jpg",
  "./Image/Ac/DSC_06662.jpg",
  "./Image/Ac/non-ac.jpg",
];

const images2 = [
  "./Image/non-ac/ac-and-non-ac.jpg",
  "./Image/non-ac/DSC_0639.jpg",
  "./Image/non-ac/DSC_0641.jpg",
  "./Image/non-ac/DSC_0643.jpg",
  "./Image/non-ac/DSC_0645.jpg",
  "./Image/non-ac/DSC_0646.jpg",
  "./Image/non-ac/DSC_0648.jpg",
  "./Image/non-ac/DSC_0649.jpg",
  "./Image/non-ac/DSC_06521.jpg",
  "./Image/non-ac/non-ac.jpg",
];

const images4 = [
  "https://res.cloudinary.com/dhd5do52g/image/upload/v1734720757/photo1_andt5j.jpg",
  "https://res.cloudinary.com/dhd5do52g/image/upload/v1734720782/photo2_wbqzgb.jpg",
  "https://res.cloudinary.com/dhd5do52g/image/upload/v1734720963/photo5_ftbakx.jpg",
  "./Image/Double-Bed-Room/DSC_0685.jpg",
  "./Image/Double-Bed-Room/DSC_0686.jpg",
  "./Image/Double-Bed-Room/DSC_0687.jpg",
  "./Image/Double-Bed-Room/DSC_0688.jpg",
  "./Image/Double-Bed-Room/DSC_0689.jpg",
  "./Image/Double-Bed-Room/DSC_0692.jpg",
];

const images3 = [
  "https://res.cloudinary.com/dhd5do52g/image/upload/v1734720782/photo2_wbqzgb.jpg",
  "https://res.cloudinary.com/dhd5do52g/image/upload/v1734720757/photo1_andt5j.jpg",
  "./Image/Single-Bed/DSC_0667.jpg",
  "./Image/Single-Bed/DSC_0668.jpg",
  "./Image/Single-Bed/DSC_0672.jpg",
  "./Image/Single-Bed/DSC_0673.jpg",
  "./Image/Single-Bed/DSC_0675.jpg",
];

const RoomDetails = () => {
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

  useEffect(() => {
    preloadImages([
      "./Image/Ac/ac-and-non-ac.jpg",
      "./Image/Ac/DSC_0615.jpg",
      "./Image/Ac/DSC_0635.jpg",
      "./Image/Ac/DSC_0657.jpg",
      "./Image/Ac/DSC_0659.jpg",
      "./Image/Ac/DSC_0660.jpg",
      "./Image/Ac/DSC_0662.jpg",
      "./Image/Ac/DSC_0663.jpg",
      "./Image/Ac/DSC_06662.jpg",
      "./Image/Ac/non-ac.jpg",
      "./Image/non-ac/ac-and-non-ac.jpg",
      "./Image/non-ac/DSC_0639.jpg",
      "./Image/non-ac/DSC_0641.jpg",
      "./Image/non-ac/DSC_0643.jpg",
      "./Image/non-ac/DSC_0645.jpg",
      "./Image/non-ac/DSC_0646.jpg",
      "./Image/non-ac/DSC_0648.jpg",
      "./Image/non-ac/DSC_0649.jpg",
      "./Image/non-ac/DSC_06521.jpg",
      "./Image/non-ac/non-ac.jpg",
      "./Image/Double-Bed-Room/delux.jpg",
  "./Image/Double-Bed-Room/DSC_0594.jpg",
  "./Image/Double-Bed-Room/DSC_0598.jpg",
  "./Image/Double-Bed-Room/DSC_0685.jpg",
  "./Image/Double-Bed-Room/DSC_0686.jpg",
  "./Image/Double-Bed-Room/DSC_0687.jpg",
  "./Image/Double-Bed-Room/DSC_0688.jpg",
  "./Image/Double-Bed-Room/DSC_0689.jpg",
  "./Image/Double-Bed-Room/DSC_0692.jpg",
  "./Image/Single-Bed/delux.jpg",
  "./Image/Single-Bed/DSC_0588.jpg",
  "./Image/Single-Bed/DSC_0667.jpg",
  "./Image/Single-Bed/DSC_0668.jpg",
  "./Image/Single-Bed/DSC_0672.jpg",
  "./Image/Single-Bed/DSC_0673.jpg",
  "./Image/Single-Bed/DSC_0675.jpg",
      ]);
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainImage, setMainImage] = useState(images[0]); // Main displayed image
  const [mainImageIndex, setMainImageIndex] = useState(0); // Index of the main image

  const imagesPerPage = 4;
  
  const handleNext = () => {
    if (currentIndex + imagesPerPage < images.length) {
      setCurrentIndex(currentIndex + imagesPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - imagesPerPage);
    }
  };

  const handleImageClick = (clickedImage, clickedIndex) => {
    // Swap the main image with the clicked image
    const updatedImages = [...images];
    updatedImages[clickedIndex] = mainImage;
    updatedImages[mainImageIndex] = clickedImage;

    setMainImage(clickedImage); // Set the clicked image as the main image
    setMainImageIndex(clickedIndex); // Update main image index
  };
          //  non-ac

  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [mainImage2, setMainImage2] = useState(images2[0]); // Main displayed image
  const [mainImageIndex2, setMainImageIndex2] = useState(0); // Index of the main image

  const imagesPerPage2 = 4;
  
  const handleNext2 = () => {
    if (currentIndex2 + imagesPerPage2 < images2.length) {
      setCurrentIndex2(currentIndex2 + imagesPerPage2);
    }
  };

  const handlePrev2 = () => {
    if (currentIndex2 > 0) {
      setCurrentIndex2(currentIndex2 - imagesPerPage2);
    }
  };

  const handleImageClick2 = (clickedImage2, clickedIndex2) => {
    // Swap the main image with the clicked image
    const updatedImages2 = [...images2];
    updatedImages2[clickedIndex2] = mainImage2;
    updatedImages2[mainImageIndex2] = clickedImage2;

    setMainImage2(clickedImage2); // Set the clicked image as the main image
    setMainImageIndex2(clickedIndex2); // Update main image index
  };


      // single-bed


      const [currentIndex3, setCurrentIndex3] = useState(0);
  const [mainImage3, setMainImage3] = useState(images3[0]); // Main displayed image
  const [mainImageIndex3, setMainImageIndex3] = useState(0); // Index of the main image

  const imagesPerPage3 = 4;
  
  const handleNext3 = () => {
    if (currentIndex3 + imagesPerPage3 < images3.length) {
      setCurrentIndex3(currentIndex3 + imagesPerPage3);
    }
  };

  const handlePrev3 = () => {
    if (currentIndex3 > 0) {
      setCurrentIndex3(currentIndex3 - imagesPerPage3);
    }
  };

  const handleImageClick3 = (clickedImage3, clickedIndex3) => {
    // Swap the main image with the clicked image
    const updatedImages3 = [...images3];
    updatedImages3[clickedIndex3] = mainImage3;
    updatedImages3[mainImageIndex2] = clickedImage3;

    setMainImage3(clickedImage3); // Set the clicked image as the main image
    setMainImageIndex3(clickedIndex3); // Update main image index
  };

              //  Double-Bed-Room

              const [currentIndex4, setCurrentIndex4] = useState(0);
              const [mainImage4, setMainImage4] = useState(images3[0]); // Main displayed image
              const [mainImageIndex4, setMainImageIndex4] = useState(0); // Index of the main image
            
              const imagesPerPage4 = 4;
              
              const handleNext4 = () => {
                if (currentIndex4 + imagesPerPage4 < images4.length) {
                  setCurrentIndex4(currentIndex4 + imagesPerPage4);
                }
              };
            
              const handlePrev4 = () => {
                if (currentIndex4 > 0) {
                  setCurrentIndex4(currentIndex4 - imagesPerPage4);
                }
              };
            
              const handleImageClick4 = (clickedImage4, clickedIndex4) => {
                // Swap the main image with the clicked image
                const updatedImages4 = [...images4];
                updatedImages4[clickedIndex4] = mainImage4;
                updatedImages4[mainImageIndex4] = clickedImage4;
            
                setMainImage4(clickedImage4); // Set the clicked image as the main image
                setMainImageIndex4(clickedIndex4); // Update main image index
              };



  return (
    <div>
                        {/* ac */}

       <Box bg="#f4f4f4" paddingTop={{lg:"50px",md:"30px", base:"10px"}} paddingBottom={{lg:"50px",md:"30px", base:"10px"}}>
       <Flex marginTop={90} borderRadius={20} direction="column" gap={5} marginLeft={{lg:"100px",md:"70px", base:"30px"}} marginRight={{lg:"100px",md:"70px", base:"30px"}}  boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bg="white" padding={20}>
       <Text textAlign="center" fontSize={30} fontWeight={600}> AC Cottage</Text>
       <Flex justifyContent="space-between" direction={{lg:"row",md:"column", base:"column"}} alignItems="center" alignContent="center" gap={{lg:"100px",md:"50px", base:"30px"}}>
      <VStack  p={5}  >
      {/* Main Image Display Box */}
      <Box w={{lg:"500px",md:"500px", base:"280px"}} h={{lg:"400px",md:"400px", base:"300px"}}  borderRadius={20} boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">
        <Image src={mainImage} alt="Main Image" w={{lg:"500px",md:"500px", base:"280px"}} h={{lg:"400px",md:"400px", base:"300px"}} borderRadius={20} objectFit="cover" />
      </Box>

      {/* Previous and Next Buttons */}
          <Flex gap={2}>
        <Button marginTop={{lg:"4px", md:"3px", base:"3px"}} onClick={handlePrev} isDisabled={currentIndex === 0}>
        <GrPrevious size={20} />
        </Button>
       
    

      {/* Slider of Images */}
      <SimpleGrid columns={4} spacing={4} >
        {images.slice(currentIndex, currentIndex + imagesPerPage).map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            w={{lg:"100px",md:"100px", base:"80px"}}
            h={{lg:"100px",md:"100px", base:"50px"}}
            objectFit="cover"
            cursor="pointer"
            borderRadius={10}
            onClick={() => handleImageClick(img, currentIndex + index)} // Handle image click
          />
        ))}
      </SimpleGrid>

      <Button marginTop={{lg:"5px",md:"3px", base:"3px"}} onClick={handleNext} isDisabled={currentIndex + imagesPerPage >= images.length}>
      <GrNext size={20} />
        </Button>
        </Flex>
    </VStack>
    <Flex gap={4} p={5}  direction="column" w={{lg:"600px",md:"600px", base:"300px"}}>
    <Text fontSize={24}> Features:</Text>
    <Flex gap={2}><SiTicktick size={20} /> <Text>Cozy queen-sized bed</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /> <Text>Ac</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /> <Text>Beautiful hillside view</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /><Text>Private balcony with panoramic hill views</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /> <Text>Free 24*7 Wi-Fi</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /> <Text>Ensuite bathroom with complimentary toiletries</Text> </Flex>
    <Flex gap={2}><SiTicktick size={20} /> <Text>Perfect for solo travelers or couples, our Standard Room provides all the essentials for a comfortable stay with a beautiful view of the surrounding hills.</Text> </Flex> 
    <Flex justifyContent="center">
    <button class="enter" onClick={handleWhatsAppClick}>Book Now</button>
    </Flex>
  </Flex>

    </Flex>
    </Flex>
     </Box>

                        {/* Non-Ac */}
      <Box bg="#f4f4f4" paddingTop={{lg:"50px",md:"30px", base:"10px"}} paddingBottom={{lg:"50px",md:"30px", base:"10px"}}>
       <Flex marginTop={90} borderRadius={20} direction="column" gap={5} marginLeft={{lg:"100px",md:"70px",base:"30px"}} marginRight={{lg:"100px",md:"70px", base:"30px"}}  boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bg="white" padding={20}>
       <Text textAlign="center" fontSize={30} fontWeight={600}>Non AC Cottage</Text>
       <Flex justifyContent="space-between" direction={{lg:"row",md:"column", base:"column"}} alignItems="center" alignContent="center" gap={{lg:"100px",md:"50px", base:"30px"}}>
      <VStack  p={5}  >
      {/* Main Image Display Box */}
      <Box w={{lg:"500px",md:"500px", base:"280px"}} h={{lg:"400px",md:"400px", base:"300px"}}  borderRadius={20} boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">
        <Image src={mainImage2} alt="Main Image" w={{lg:"500px",md:"500px", base:"280px"}} h={{lg:"400px",md:"400px", base:"300px"}}  borderRadius={20} objectFit="cover" />
      </Box>

      {/* Previous and Next Buttons */}
          <Flex gap={2}>
        <Button marginTop={{lg:"5px",md:"3px", base:"3px"}} onClick={handlePrev2} isDisabled={currentIndex2 === 0}>
        <GrPrevious size={20} />
        </Button>
       
    

      {/* Slider of Images */}
      <SimpleGrid columns={4} spacing={4} >
        {images2.slice(currentIndex2, currentIndex2 + imagesPerPage2).map((img2, index2) => (
          <Image
            key={index2}
            src={img2}
            alt={`Thumbnail ${index2}`}
            w={{lg:"100px",md:"100px", base:"80px"}}
            h={{lg:"100px",md:"100px", base:"50px"}}
            objectFit="cover"
            cursor="pointer"
            borderRadius={10} 
            onClick={() => handleImageClick2(img2, currentIndex2 + index2)} // Handle image click
          />
        ))}
      </SimpleGrid>

      <Button marginTop={{lg:"5px",md:"3px", base:"3px"}} onClick={handleNext2} isDisabled={currentIndex2 + imagesPerPage2 >= images2.length}>
      <GrNext size={20} />
        </Button>
        </Flex>
    </VStack>
    <Flex direction="column" p={5} gap={4} w={{lg:"600px",md:"600px", base:"300px"}}>
    <Text fontSize={24}> Features:</Text>
    <Flex gap={2}><SiTicktick size={20} /> <Text>Cozy queen-sized bed</Text> </Flex>  
    <Flex gap={2}><SiTicktick size={20} /> <Text>Beautiful hillside view</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /><Text>Private balcony with panoramic hill views</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /> <Text>Free 24*7 Wi-Fi</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /> <Text>Ensuite bathroom with complimentary toiletries</Text> </Flex>
    <Flex gap={2}><SiTicktick size={20} /> <Text>Perfect for solo travelers or couples, our Standard Room provides all the essentials for a comfortable stay with a beautiful view of the surrounding hills.</Text> </Flex> 
    <Flex justifyContent="center">
    <button class="enter" onClick={handleWhatsAppClick}>Book Now</button>
    </Flex>
  </Flex>

    </Flex>
    </Flex>
     </Box>

                       {/* Single-bed */}

     <Box bg="#f4f4f4" paddingTop={{lg:"50px",md:"30px", base:"10px"}} paddingBottom={{lg:"50px",md:"30px", base:"10px"}}>
       <Flex marginTop={90} borderRadius={20} direction="column" gap={5} marginLeft={{lg:"100px",md:"70px", base:"30px"}} marginRight={{lg:"100px",md:"70px", base:"30px"}}  boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bg="white" padding={20}>
       <Text textAlign="center" fontSize={30} fontWeight={600}>Single Bed Mat House</Text>
       <Flex justifyContent="space-between" direction={{lg:"row",md:"column", base:"column"}} alignItems="center" alignContent="center" gap={{lg:"100px",md:"50px", base:"30px"}}>
      <VStack  p={5}  >
      {/* Main Image Display Box */}
      <Box w={{lg:"500px",md:"500px", base:"280px"}} h={{lg:"400px",md:"400px", base:"300px"}}  borderRadius={20} boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">
        <Image src={mainImage3} alt="Main Image" w={{lg:"500px",md:"500px", base:"280px"}} h={{lg:"400px",md:"400px", base:"300px"}} borderRadius={20} objectFit="cover" />
      </Box>

      {/* Previous and Next Buttons */}
          <Flex gap={2}>
        <Button marginTop={{lg:"5px",md:"3px", base:"3px"}} onClick={handlePrev3} isDisabled={currentIndex3 === 0}>
        <GrPrevious size={20} />
        </Button>
       
    

      {/* Slider of Images */}
      <SimpleGrid columns={4} spacing={4} >
        {images3.slice(currentIndex3, currentIndex3 + imagesPerPage3).map((img3, index3) => (
          <Image
            key={index3}
            src={img3}
            alt={`Thumbnail ${index3}`}
            w={{lg:"100px",md:"100px", base:"80px"}}
            h={{lg:"100px",md:"100px", base:"50px"}}
            objectFit="cover"
            cursor="pointer"
            borderRadius={10} 
            onClick={() => handleImageClick3(img3, currentIndex3 + index3)} // Handle image click
          />
        ))}
      </SimpleGrid>

      <Button marginTop={{lg:"5px",md:"3px", base:"3px"}} onClick={handleNext3} isDisabled={currentIndex3 + imagesPerPage3 >= images3.length}>
      <GrNext size={20} />
        </Button>
        </Flex>
    </VStack>
    <Flex direction="column" p={5} gap={4} w={{lg:"600px",md:"600px", base:"300px"}}>
    <Text fontSize={24}> Features:</Text>
    <Flex gap={2}><SiTicktick size={20} /> <Text>King-sized bed with premium bedding</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /> <Text>Beautiful hillside view</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /><Text>Private balcony with panoramic hill views</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /> <Text>Free 24*7 Wi-Fi</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /> <Text>Spacious bathroom with a rain shower</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /> <Text>Ensuite bathroom with complimentary toiletries</Text> </Flex>
    <Flex gap={2}><SiTicktick size={20} /> <Text>Our Deluxe Rooms offer a luxurious space with a stunning view. Ideal for couples or small families, these rooms blend elegance with the natural beauty of the hills.</Text> </Flex> 
    
    <Flex justifyContent="center">
    <button class="enter" onClick={handleWhatsAppClick}>Book Now</button>
    </Flex>

    
  </Flex>

    </Flex>
    </Flex>
     </Box>

                      {/* Double-Bed-Room */}
                      <Box bg="#f4f4f4" paddingTop={{lg:"50px",md:"30px", base:"10px"}} paddingBottom={{lg:"50px",md:"30px", base:"10px"}}>
       <Flex marginTop={90} borderRadius={20} direction="column" gap={5} marginLeft={{lg:"100px",md:"70px", base:"30px"}} marginRight={{lg:"100px",md:"70px", base:"30px"}}  boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bg="white" padding={20}>
       <Text textAlign="center" fontSize={30} fontWeight={600}>Double Bed Mat House</Text>
       <Flex justifyContent="space-between" direction={{lg:"row",md:"column", base:"column"}} alignItems="center" alignContent="center" gap={{lg:"100px",md:"50px", base:"30px"}}>
      <VStack  p={5}  >
      {/* Main Image Display Box */}
      <Box w={{lg:"500px",md:"500px", base:"280px"}} h={{lg:"400px",md:"400px", base:"300px"}}  borderRadius={20} boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">
        <Image src={mainImage4} alt="Main Image"  borderRadius={20} w={{lg:"500px",md:"500px", base:"280px"}} h={{lg:"400px",md:"400px", base:"300px"}} objectFit="cover" />
      </Box>

      {/* Previous and Next Buttons */}
          <Flex gap={2}>
        <Button marginTop={{lg:"5px",md:"3px", base:"3px"}} onClick={handlePrev4} isDisabled={currentIndex4 === 0}>
        <GrPrevious size={20} />
        </Button>
       
    

      {/* slider */}
      <SimpleGrid columns={4} spacing={4} >
        {images4.slice(currentIndex4, currentIndex4 + imagesPerPage4).map((img4, index4) => (
          <Image
            key={index4}
            src={img4}
            alt={`Thumbnail ${index4}`}
            w={{lg:"100px",md:"100px", base:"80px"}}
            h={{lg:"100px",md:"100px", base:"50px"}}
            objectFit="cover"
            cursor="pointer"
            borderRadius={10} boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
            onClick={() => handleImageClick4(img4, currentIndex4 + index4)} // Handle image click
          />
        ))}
      </SimpleGrid>

      <Button marginTop={{lg:"5px",md:"3px", base:"3px"}} onClick={handleNext4} isDisabled={currentIndex4 + imagesPerPage4 >= images4.length}>
      <GrNext size={20} />
        </Button>
        </Flex>
    </VStack>
    <Flex direction="column" p={5} gap={4} w={{lg:"600px",md:"600px", base:"300px"}}>
    <Text fontSize={24}> Features:</Text>
    <Flex gap={2}><SiTicktick size={20} />  <Text>King-sized bed or twin beds</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /> <Text>Beautiful hillside view</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /><Text>Private balcony with panoramic hill views</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /> <Text>Free 24*7 Wi-Fi</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /> <Text>Spacious bathroom with a rain shower</Text> </Flex> 
    <Flex gap={2}><SiTicktick size={20} /> <Text>Ensuite bathroom with complimentary toiletries</Text> </Flex>
    <Flex gap={2}><SiTicktick size={20} /> <Text>A step up in luxury, the Superior Room offers additional space, breathtaking views, and premium amenities for those looking to unwind in style.</Text> </Flex> 
     
    <Flex justifyContent="center">
    <button class="enter" onClick={handleWhatsAppClick}>Book Now</button>
    </Flex>

  </Flex>

    </Flex>
    </Flex>
     </Box>
 

  </div> 
);
  
}

export default RoomDetails