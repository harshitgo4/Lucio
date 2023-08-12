//import React from 'react'

import { Stack, VStack ,Heading, Text,Button} from "@chakra-ui/react"
import { useState } from "react"
const videosource=['http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4','http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4','http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4']
const Videos = () => {
   const [videosrc,setvideosrc]=useState(videosource[0]);
  return (
    <Stack direction={['column','row']} h={'100vh'}>
        <VStack w={'full'}>
            <video controls 
            controlsList='nodownload'
            style={
                {
                    width:'100%'
                }
            }
            src={videosrc}/>
             <VStack alignItems={'flex-start'} overflowY={'auto'} p={'8'} w={'full'}>
            <Heading>
                Explore Our Courses
            </Heading>
            <Text>This is a Sample Video</Text>
        </VStack>
        </VStack>
        <VStack w={['full',"xl"]} alignItems={'stretch'} p={'8'} spacing={'8'} overflowy={'auto'}>
           {videosource.map((item,index) => (
             <Button key={index} variant={'ghost'} colorScheme="red" onClick={()=>{setvideosrc(item)}}> 
             Lecture {index+1}
         </Button>
           ))}
        </VStack>
    </Stack>
  );}


export default Videos
