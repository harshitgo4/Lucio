import {Button, Container, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const 
 Login= () => {
  return (
    <Container maxW={'container.xl'} p={'16'} h={'100vh'}> 
    <VStack color={'red.400'} h={'full'} justifyContent={'stretch'}>
        <Heading color={'blackAlpha.800'} margin={'8'}>Welcome Back</Heading>
        <form >
            <Input type='email'placeholder='Email' required focusBorderColor={'red100'} p={'2'} my={
                '4'
            }></Input>
             <Input type='password'placeholder='Password..'  p={'2'} required focusBorderColor={'red100'} my={
                '4'
            }></Input>
            <HStack justifyContent={'flex-end'} my={'3'}>
            <Button  variant={'link'}>
                <Link to='/signup' >
                 Forget password..?
                </Link>
               </Button>

            </HStack>
               
           <HStack justifyContent={'space-between'}>
           <Button colorScheme='red'  >
            Login
            </Button>
            
                <HStack>
                <Text>New User ?</Text>
               
                <Button>
                <Link to='/signup'>
                 Signup 
                </Link>
               </Button>
               
                
                </HStack>
           
           </HStack>
        </form>
    </VStack>
    </Container>
  )
}

export default Login

