import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../images/1.jpeg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import '../styles/home.css'
import img4 from '../images/4.png';

const Home = () => {
  return (
    <>
    
      <Box>
        <Mycarousel />
      </Box>
    <Container maxWidth={'container.xl' } minHeight={'100vh'} p='16'>
    <Heading textTransform={'uppercase'} py='2' w={'fit-content'} borderBottom={'2px solid'} margin={'auto'}>Services</Heading>
    <Stack h={'full'} direction={['column']} p={'4'} alignItems={'center'} justifyContent={'space-evenly'}>
        <Image src={img4} size h={['40','400']}/>
        <Text lineHeight={'160%'} letterSpacing={'widest'} py={['4','16']} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vitae voluptatibus laboriosam quidem excepturi ea similique id ipsa quasi quo. Iure provident beatae, aperiam, ut quidem explicabo et quasi ex officiis ipsa, aliquam saepe Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati tenetur nisi eligendi voluptas quidem sint, quam suscipit deserunt earum officiis, dolores fuga maxime temporibus provident. Fugit sequi in tempore. Quae, nobis necessitatibus.! 
        </Text>
    </Stack>
    </Container>
    </>
  );
};

const Mycarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false}>

        <Box w={'full'} h={'100vh'}>
          <Image src={img1} alt="Image 1" />
          <Heading  className={'hober'}  bg={'whiteAlpha.500'} color={'blackAlpha.600'}>
           Computer Tutorials
          </Heading>
        </Box>
   
        <Box w={'full'} h={'100vh'}>
          <Image src={img2} alt="Image 2" />
          <Heading className={'hober'}bg={'blackAlpha.600'} >
          Elecrical Tutorials
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Image src={img3} alt="Image 3" />
          <Heading className={'hober'} bg={'blackAlpha.600'}>
           Civil Tutorials
          </Heading>
        </Box>
    </Carousel>
  );
};

export default Home;
