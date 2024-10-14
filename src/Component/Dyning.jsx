import { Box, Flex ,Text, useDisclosure,Button, TabList, TabIndicator, TabPanels, TabPanel,Tab, Tabs, List, ListItem, ListIcon} from '@chakra-ui/react'
import React from 'react'
import { FaBowlRice } from 'react-icons/fa6';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { MdCheckCircle, MdFreeBreakfast, MdSettings } from 'react-icons/md';

const Dyning = () => {
    const { isOpen, onToggle } = useDisclosure();
  return (
    <Box bg="#f4f4f4" paddingTop={{lg:"50px",md:"30px", base:"15px"}} paddingBottom={{lg:"50px",md:"30px", base:"15px"}}>
    <Flex direction="column" borderRadius={20} gap={10} justifyContent="center" id='dyning' marginLeft={{lg:"100px",md:"70px", base:"30px"}} marginRight={{lg:"100px",md:"70px", base:"30px"}}   boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bg="white" p={{lg:"20px",md:"20px", base:"30px"}}>
        <Text fontWeight={600} fontSize={45} textAlign="center">Dining</Text>
        <Flex id='smcol' direction={{lg:"row",md:"column",base:"column"}} justifyContent="center" alignContent="center" alignItems="center" gap={10}>
        <Flex direction="column" gap={3}>
        <div class="Dcard">
            <img src="./Image/food2.jpg" className='Dimg' alt="" />
         </div>
         <div>
         <Text textAlign="center">Breakfast</Text>
         </div>
         </Flex>
         <Flex direction="column" gap={3}>
         <div class="Dcard">
            <img src="./Image/food1.jpg" className='Dimg' alt="" />
         </div>
         <div>
         <Text textAlign="center">Lunch</Text>
         </div>
        </Flex>
        <Flex direction="column" gap={3}>
         <div class="Dcard">
            <img src="./Image/food3.jpg" className='Dimg' alt="" />
         </div>
         <div>
         <Text textAlign="center">Dinner</Text>
         </div>
         </Flex>
         
        </Flex>
 
   
    </Flex>
    </Box>

  )
}

export default Dyning