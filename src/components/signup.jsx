import {Button, Container, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const 
 Signup= () => {
  return (
    <Container maxW={'container.xl'} p={'16'} h={'100vh'}> 
    <VStack color={'red.400'} h={'full'} justifyContent={'stretch'}>
    <VStack w={'full'} > 
        <Heading>
            LUCIO
        </Heading>
       <Text letterSpacing={'widest'}
       >Making Changes
       </Text>
        </VStack>
        <form >
        <Input type='name'placeholder='Name' required focusBorderColor={'red100'} p={'2'} my={
                '4'
            }></Input>
            <Input type='email'placeholder='Email' required focusBorderColor={'red100'} p={'2'} my={
                '4'
            }></Input>
             <Input type='password'placeholder='Password..'  p={'2'} required focusBorderColor={'red100'} my={
                '4'
            }></Input>
         
               
           <HStack justifyContent={'space-between'}>
           <Button colorScheme='red'  >
            Sign Up
            </Button>
            
                <HStack>
                <Text>Already a User ?</Text>
               
                <Button>
                <Link to='/login'>
                 Sign in
                </Link>
               </Button>
                </HStack>
           
           </HStack>
        </form>
    </VStack>
    </Container>
  )
}

export default Signup;

