import styled from "styled-components"
import { mobile } from "../responsive"
import {Link} from "react-router-dom"
import {motion} from "framer-motion"


const Container = styled.div`
flex: 1;
height: 70vh;
margin: 4px;
position: relative;

`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height:"30vh"})}
    
`
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h2`
  color: white;
  margin-bottom: 15px;
`

const Button = styled.button`
padding: 8px 8px;
display: flex;
align-items: center;
justify-content: center;
gap: 7px;
color: white;
background-color: transparent;
border: 1px solid white;
outline: none;
cursor: pointer;
font-weight: bold;
font-size: 18px;
`

const CategoryItem = ({item}) => {
  return (
    <Container as={motion.div}  whileHover={{
      scale: 0.95,
      transition: { duration: 0.5 },
    }}>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem
