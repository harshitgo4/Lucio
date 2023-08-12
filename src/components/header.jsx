import React from 'react'
import { Link } from 'react-router-dom'
import {
    Drawer,
   // DrawerBody,
  //  DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    //Center,
    HStack
  } from '@chakra-ui/react'
  import {BiMenuAltLeft} from 'react-icons/bi'

  
  const Header = () => {
  const {isOpen,onOpen,onClose}=useDisclosure();
  return (<>
  
    <Button  zIndex={'overlay'}pos={'fixed'} top={'4'} left='4' colorScheme='red' onClick={onOpen}>
        <BiMenuAltLeft size={20}/>
    </Button>
    <Drawer isOpen={isOpen} onClose={onClose} placement='left' >
      <DrawerOverlay/>
      <DrawerContent>
      <DrawerCloseButton/>
      <DrawerHeader textAlign={'center'}>
        Lucio
      </DrawerHeader>
      <VStack alignItems={'flex-start'}>
        <Button onClick={onClose} variant={'ghost'} colorScheme='red'>
          <Link to='/'>Home</Link>
        </Button>
        <Button  onClick={onClose}variant={'ghost'} colorScheme='red'>
        <Link to='/videos'>Videos</Link>
        </Button>
        <Button  onClick={onClose}variant={'ghost'} colorScheme='red'>
        <Link to='/videos?=category=free'>Free Tutorials</Link>
        </Button>
        <Button onClick={onClose} variant={'ghost'} colorScheme='red'>
        <Link to='/upload'>Add Tutorials</Link>
        </Button>

      </VStack>
      <HStack pos={'absolute'} bottom={'10'} justifyContent={'space-evenly'} w={'full'}> 
      <Button  onClick={onClose}colorScheme='red'> 
      <Link to='/login'>Log in</Link>
        </Button>
        <Button  onClick={onClose}colorScheme='red'> 
        <Link to='/logout'>Logout</Link>
           </Button>
      
      </HStack>
      </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header
