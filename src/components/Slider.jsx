import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {sliderItems} from "../data"
import { mobile } from '../responsive'; 



const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display:"none"})}

`
const Arrow = styled.div`
    /* height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: white; */
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction==="left" && "20px"};
    right: ${props => props.direction==="right" && "20px"};
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;

    
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 2s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);

`
const Slide = styled.div`
display: flex;
align-items: center;
height: 100vh;
width: 100vw;
background-color: #${(props) => props.bg};

    
`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    
    
`
const Image = styled.img`
height: 100%;
object-fit: contain;
width: 100%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 40px;
    
`
const Title = styled.h2`
    font-size: 50px;
`
const Desc = styled.p`
    margin: 30px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
padding: 8px 8px;
display: flex;
align-items: center;
justify-content: center;
gap: 7px;
color: #16a085;
background-color: transparent;
border: 1px solid #16a085;
outline: none;
cursor: pointer;
font-weight: bold;
font-size: 16px;
`

const Slider = () => {
    const [slideIndex,setSlideIndex] =  useState(0)
    const handleLeftClick = () =>{
            setSlideIndex(slideIndex > 0 ? slideIndex-1: 2)
     

    }
    const handleRightClick = () =>{
       
            setSlideIndex(slideIndex<2 ? slideIndex + 1: 0)
        

    }

    
  return (
    <Container>
        <Arrow direction="left" onClick={handleLeftClick} >
            <ArrowCircleLeftIcon />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>{
                return(
                    <Slide key={item.id} bg={item.bg}>
                    <ImageContainer>
                        <Image src={item.img}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Link to="/products/jeans" style={{textDecoration:"none"}}>
                        <Button>SHOP NOW</Button>
                        </Link>
        
                    </InfoContainer>
                    </Slide>
                )

            })}
           

          

        </Wrapper>
        <Arrow direction="right" onClick={handleRightClick}>
            <ArrowCircleRightIcon/>
        </Arrow>



      
    </Container>
  )
}

export default Slider
