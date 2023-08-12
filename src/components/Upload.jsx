import React from 'react'
import { Button, Container, HStack, Input, VStack, } from '@chakra-ui/react'
import {AiOutlineCloud} from 'react-icons/ai'
//import { Form } from 'react-router-dom'
const Upload = () => {
  return (
  <Container maxW={'container.xl'} h='100vh' p='16'>
<VStack justifyContent={'center'} h={'full'} color={'red.100'}>
<AiOutlineCloud size={'400'}/>
<form >
<HStack>
<Input required type='file' p={'4'} h={'auto'}/>
<Button colorScheme='red' type='submit'>Upload</Button>
</HStack>
</form>
</VStack>
  </Container> 
)
}

export default Upload
