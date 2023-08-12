import { Box ,Stack,VStack,Heading, HStack, Button, Input, Text} from '@chakra-ui/react'
import React from 'react'

import {FcRight  } from "react-icons/fc";
const Footer = () => {
  return (
   <Box bg={'blackAlpha.900'} color={'white'} p={'16'} minH={30}>
    <Stack direction={['column','row']}>
        <VStack alignItems={'stretch'} w={'full'}>
        <Heading size={'md'} textTransform={'uppercase'}> 
        Subscribe for Updates
        </Heading>
        <HStack borderBottom={'1px solid white'} py={'4'}>
            <Input placeholder='Enter details' border={'none'} outline={'none'} borderRadius={'none'} focusBorderColor='none' />
            <Button p={'0'}
            variant={'ghost'}
            borderRadius={'0 20px 20px 0'}
            colorScheme='white'
            color={'white'}>
                <FcRight size={'20'}/>
            </Button>
        </HStack>
        </VStack>
        <VStack w={'full'} borderLeft={['none','2px solid white']}
        borderRight={['none','2px solid white']}> 
        <Heading>
            LUCIO
        </Heading>
       <Text letterSpacing={'widest'}
       >Making Changes
       </Text>
        </VStack>
        <VStack w={'full'}>
        <Heading textTransform={'uppercase'}>Social Media</Heading>
        <Button variant={'link'} colorScheme={'red'}>Youtube</Button>
        <Button variant={'link'} colorScheme={'red'}>Instagram</Button>
        <Button variant={'link'} colorScheme={'red'}>Mail</Button>
        </VStack>
    </Stack>
   </Box>
  )
}

export default Footer
