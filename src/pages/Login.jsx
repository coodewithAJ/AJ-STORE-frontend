import styled from "styled-components"
import { mobile } from "../responsive";
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { publicRequest } from "../requestMethods";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6)),  url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80") center no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;
const Wrapper = styled.div`
    background-color: white;
    padding: 20px;
    width: 30%;
    ${mobile({width: "80%"})}
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding:8px;
    outline: none;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    color: white;
    background-color: #ea8685;
    cursor: pointer;
    font-weight: 700;
    margin-bottom: 10px;
`;
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 800;
`


const Login = () => {
    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    const handleLogin = async(e)=>{
        e.preventDefault()
        dispatch(loginStart());
        const user = {username,password}
        
        try{
            const res = await publicRequest.post("/auth/login",user)
            dispatch(loginSuccess(res.data))
            navigate("/")
          
        }catch(err){
            dispatch(loginFailure());
        }

    }
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
               
                <Input placeholder="username" onChange={(e)=>setUserName(e.target.value)} required/>
                <Input placeholder="password" onChange={(e)=>setPassword(e.target.value)} required/>
              
               
                <Button onClick={handleLogin}>LOGIN IN</Button>
                <Link>Do not remember the password? </Link>
                <Link>Create a new account </Link>
                
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Login
