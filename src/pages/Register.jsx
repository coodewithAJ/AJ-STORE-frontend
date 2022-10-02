import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { publicRequest } from "../requestMethods";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6)),  url("https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80") center no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;
const Wrapper = styled.div`
    background-color: white;
    padding: 20px;
    width: 40%;
    ${mobile({width: "80%"})}
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding:8px;
    outline: none;
`;
const Agreement = styled.span`
    font-size: 15px;
    margin: 20px 0px;
    ${mobile({fontSize:"10px"})}
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    color: white;
    background-color: #ea8685;
    cursor: pointer;
    font-weight: 700;
    ${mobile({width:"100%"})}
`;


const Register = () => {
    const [name,setName] = useState("")
    const [lastName,setLastName] = useState("")
    const [username,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [conformPassword,setConformPassword] = useState("")
    const navigate =  useNavigate()

    const handleCreate = async(e)=>{
        e.preventDefault();
        const user = {name,lastName,username,email,password,conformPassword}
        const res = await publicRequest.post("/auth/register",user)
        navigate("/login")

    }
   
    
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name" onChange={(e)=>setName(e.target.value)} required/>
                <Input placeholder="last name" onChange={(e)=>setLastName(e.target.value)} required/>
                <Input placeholder="username" onChange={(e)=>setUserName(e.target.value)} required />
                <Input placeholder="email" onChange={(e)=>setEmail(e.target.value)} required/>
                <Input placeholder="password" onChange={(e)=>setPassword(e.target.value)} required/>
                <Input placeholder="confirm password" onChange={(e)=>setConformPassword(e.target.value)} required/>
                <Agreement>By creating an account , I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY </b></Agreement>
                <Button onClick={handleCreate}>CREATE</Button>
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Register
