import styled from "styled-components"
import { Link } from "react-router-dom";
import {motion} from "framer-motion"


const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 250px;
    height: 350px;
    background-color: #f8f5f5;
    display: flex;
    flex-direction: column;

`
const Image = styled.img`
    height: 80%;
    object-fit: contain;
    
    
`
const Info = styled.div`
   display:flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
   font-size: 30px;
   margin-top: 10px;
   

`
const Circle = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #ded7d7;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
`
const Icon = styled.div`
    font-weight: bold;
    cursor: pointer;
    &:hover{
        color: white;

    }
`
const Button = styled.div`
padding: 8px 14px;
display: flex;
align-items: center;
justify-content: center;
gap: 7px;
color: teal;
background-color:transparent;
border: 1px solid teal;
outline: none;
cursor: pointer;
font-weight: bold;
font-size: 13px;
`


const Product = ({item}) => {
  return (
    <Container as={motion.div}  whileHover={{
        scale: 1.1,
        zIndex:5,
        transition: { duration: 0.5 },
      }}>
        <Image src={item.img}  />
        <Info>
            
            <Link to={`/product/${item._id}`} style={{textDecoration:"none"}}>
            <Button as={motion.div}  whileHover={{
        scale: 0.8,
        zIndex:5,
        transition: { duration: 0.5 },
      }}>BUY-NOW</Button>
            </Link>
            
        </Info>
        
      
    </Container>
  )
}

export default Product
