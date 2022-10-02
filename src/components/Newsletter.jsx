import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    height: 60vh;
    display: flex;
    background-color: gray;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0.8;

`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({fontSize:"40px"})}
    
`;
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({fontSize:"16px",textAlign:"center"})}
    
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    ${mobile({width:"90%"})}
   
    
`;
const Input = styled.input`
    border: none;
    outline: none;
    flex:8;
    padding-left: 20px;
`;
const Button = styled.button`
    flex:1;
    border: none;
    cursor: pointer;
    color:white;
    background-color: #574b90;

`;
const Newsletter = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const handleClick =(e)=>{
        e.preventDefault()
        alert("Thanks for subscribing us ")
        navigate("/")




    }
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favourite products.</Desc>
        <InputContainer>
        <Input placeholder="Email"/>
        <Button onClick={handleClick}>
            <SendIcon/>

        </Button>
        </InputContainer>
      
    </Container>
  )
}

export default Newsletter
