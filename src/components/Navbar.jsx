import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import {mobile} from "../responsive"
import { Search } from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom";
import { logout } from "../redux/userSlice";
import { removeProduct } from "../redux/cartRedux";

const Container = styled.div`
  height: 60px;
  ${mobile({height:"50px"})}
`;
const Wrapper = styled.div`
  padding: 10px 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding:"10px 0px"})}
`;
const Left = styled.div`
  flex: 1;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  padding: 2px 1px;
  width: 100%;
  /* overflow: hidden;
   */
`;
const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  width: 100%;
  /* background-color: red; */
  ${mobile({padding:"2px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h2`
  font-weight: bold;
  ${mobile({fontSize:"15px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  ${mobile({justifyContent:"center",gap:"3px",flex:"2"})}
`;
const MenuItem = styled.div`
  font-size: 13px;
  ${mobile({fontSize:"11px"})}
  cursor: pointer;
  margin-right: 10px;
  
  
`;
const Button = styled.div`
padding: 6px 10px;
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
font-size: 11px;
`


const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const {currentUser} = useSelector(state=>state.user)
  
  
  const dispatch = useDispatch()
  const handleLogout=(e)=>{
    e.preventDefault();
    dispatch(logout())
    dispatch(removeProduct())

    
  }
 
 
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{color:"gray", fontSize:"20px"}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>AJ-STORE</Logo>
        </Center>
        <Right>
          {!currentUser &&    <Link to="/register" style={{textDecoration:"none"}}>
          <MenuItem>REGISTER</MenuItem>
          
          </Link> }

          {!currentUser &&  <Link to="/login" style={{textDecoration:"none"}}>
          <MenuItem>SIGN IN</MenuItem>
          </Link> }
          {currentUser && <MenuItem style={{fontSize:"15px",fontWeight:"bold",color:"#16a085"}}>{currentUser.username}</MenuItem> }

          {currentUser && <Button onClick={handleLogout}>LOGOUT</Button> }
     
         
          <Link to="/cart">
          <MenuItem>
            <Badge color="primary" badgeContent={quantity}>
              <ShoppingCartIcon/>
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
