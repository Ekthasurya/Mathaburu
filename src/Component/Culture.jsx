import { Box, Flex,Text ,Image,Button} from '@chakra-ui/react'
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


const Culture = () => {
  useEffect(() => {
    preloadImages(["./Image/chownach.jpg", 
      "./Image/patanach.jpg",
      "./Image/santali.jpg",
      "./Image/boul.jpg"
    ]);
  }, []);
  return (
  
    <Box bg="#f4f4f4" paddingTop={{lg:"50px",md:"30px", base:"10px"}} paddingBottom={{lg:"50px",md:"30px", base:"10px"}}>
    <Flex direction="column" gap={10} borderRadius={20}  id='culture' marginLeft={{lg:"100px",md:"70px", base:"30px"}} marginRight={{lg:"100px",md:"70px", base:"30px"}} boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bg="white" p={{lg:"20px",md:"7px", base:"7px"}}  >

      <Text textAlign="center" fontSize={45} fontWeight={600}>Cultural</Text>
      <Flex justifyContent="center" alignItems="center" gap={{lg:"50px",md:"30px", base:"15px"}}>
    
<div class="Ccard">
  <img className='Cimage' src="./Image/chownach.jpg" alt="" />
</div>

<div class="Ccard1">
  <Text fontWeight={600}  textAlign="center">Chownach</Text>
  <p className='Ctext'>Purulia Chhau Nach (also spelled Chow Nach) is a vibrant and highly stylized form of the Chhau dance, originating from the Purulia district in the state of West Bengal, India. This traditional dance form is known for its elaborate masks, energetic martial movements, and the depiction of mythological stories, particularly from the Ramayana, Mahabharata, and Puranas</p>
</div>

      </Flex>

      <Flex justifyContent="center" alignItems="center" gap={{lg:"50px",md:"30px", base:"15px"}}>

      <div class="Ccard1">
      <Text fontWeight={600} textAlign="center">Pata Nach</Text>
      <p className='Ctext'>Pata Nach in Purulia is a traditional folk performance combining dance, painting, and storytelling. The performers use Patachitra (scroll paintings) to narrate stories, often from mythology or local folklore. As the scrolls are unraveled, the dancers sing songs that explain the painted scenes. Simple, graceful dance movements accompany the performance. It is an art form deeply rooted in the cultural heritage of West Bengal's Chitrakar community.</p>
      </div>
    
    <div class="Ccard2">
      <img className='Cimage2' src="./Image/patanach.jpg" alt="" />
    </div>
          </Flex>

          <Flex justifyContent="center" alignItems="center" gap={{lg:"50px",md:"30px", base:"15px"}}>
    
    <div class="Ccard">
      <img className='Cimage' src="./Image/santali.jpg" alt="" />
    </div>
    
    <div class="Ccard1">
      <Text fontWeight={600} textAlign="center">Santali Song and Dance</Text>
      <p className='Ctext'>In Purulia, Santali songs and dances are an important part of the Santal tribe’s cultural and religious traditions. The songs often focus on themes like nature, love, and spirituality, accompanied by instruments like the Tumdak and Tamak. Santali dances feature rhythmic, energetic movements, with men and women dancing in circles or lines. The dancers wear colorful attire, with women adorned in beads and silver jewelry. These performances celebrate community, nature, and Santal heritage.</p>
    </div>
    
          </Flex>
    
          <Flex justifyContent="center" alignItems="center" gap={{lg:"50px",md:"30px", base:"15px"}}>

<div class="Ccard1">
<Text fontWeight={600} textAlign="center">Boul Song</Text>
<p className='Ctext'>Purulia Chhau Nach (also spelled Chow Nach) is a vibrant and highly stylized form of the Chhau dance, originating from the Purulia district in the state of West Bengal, India. This traditional dance form is known for its elaborate masks, energetic martial movements, and the depiction of mythological stories, particularly from the Ramayana, Mahabharata, and Puranas</p>
</div>

<div class="Ccard2">
      <img className='Cimage2' src="./Image/boul.jpg" alt="" />
    </div>
    </Flex>
    </Flex>
   </Box>
  )
}

export default Culture