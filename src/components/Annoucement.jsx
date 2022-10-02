
import styled from "styled-components"
import { mobile } from "../responsive"


const Container = styled.div`
height: 30px;
background-color: #505964;
color: white;
align-items: center;
justify-content: center;
display: flex;
font-weight: 500;
${mobile({fontSize:"10px"})}

    
`

const Annoucement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on orders above RS500
      
    </Container>
  )
}

export default Annoucement
