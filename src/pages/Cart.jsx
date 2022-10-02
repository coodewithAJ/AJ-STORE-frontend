import { Add, Remove } from "@mui/icons-material"
import { useState } from "react"
import {  useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import Annoucement from "../components/Annoucement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { removeProduct } from "../redux/cartRedux";


const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding:"10px"})}
`
const Title = styled.h2`
    font-weight: 400;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    ${mobile({padding:"2px",margin:"10px 0px"})}

`
const TopButton = styled.button`
padding: 8px 8px;
display: flex;
align-items: center;
justify-content: center;
gap: 7px;
color: teal;
background-color: transparent;
border: 1px solid teal;
outline: none;
cursor: pointer;
font-weight: bold;
font-size: 13px;
${mobile({fontSize:"10px"})}
`
const TopTexts = styled.div`
    ${mobile({display:"none"})}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column",gap:"10px"})}
`
const Info = styled.div`
    flex: 3;
    
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column",gap:"10px"})}
    

`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    
`
const Image = styled.img`
    width: 200px;
    ${mobile({width:"150px"})}
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    ${mobile({padding:"10px",fontSize:"12px"})}
    
    
    
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=>props.color};
`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
    
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
`
const ProductAmount = styled.div`
    font-size: 20px;
    margin: 0px 10px;
`
const ProductPrice = styled.div`
    font-size: 25px;
    font-weight: 200;
    
`
const Hr = styled.hr`
    background-color: #aea8a8;
    border: none;
    height: 1px;
    margin: 10px 0px;
`
const Summary = styled.div`
    flex: 1;
    border: 1px solid lightgray;
    padding: 20px;
    height: 90vh;
`
const SummaryTitle = styled.h2`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props)=>props.type === "total" && "500"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.div`
padding: 8px 8px;
display: flex;
align-items: center;
justify-content: center;
gap: 7px;
color: white;
background-color:black;
border: 1px solid teal;
outline: none;
cursor: pointer;
font-weight: bold;
font-size: 13px;
`
const Address = styled.input`
width: 100%;
padding: 7px;
font-size: 12px;
outline: none;
margin-top: 15px;
border-radius: none;
border: 1px solid lightgray;
    
`




const Cart = () => {
    
    const cart = useSelector(state=>state.cart)
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const quantity = useSelector(state=>state.cart.quantity)
    const {currentUser} = useSelector(state=>state.user)
    const dispatch = useDispatch()
    
    const navigate = useNavigate()
    const handleConform = (e)=>{
        e.preventDefault();

        if(quantity == 0){
            alert("please add items in your cart")
        }
        
        if(email,phone,address){
            {currentUser?alert("Your order has been conformed"):alert("please login your account first")}
            navigate("/")
            dispatch(removeProduct())
            

        }else{
            alert("please provide your email,phone and address")

        }
        
        
        

    }
   
    const handleShopping=()=>{
        navigate("/")
    }
    
    
   
  return (
    <Container>
        <Annoucement/>
        <Navbar/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton onClick={handleShopping} as={motion.div}  whileHover={{
        scale: 0.8,
        transition: { duration: 0.5 },
      }}>CONTINUE-SHOPPING</TopButton>
                <TopTexts>
                <TopText>Shopping Bag({quantity})</TopText>
                <TopText>Your Wishlist(0)</TopText>
                
                </TopTexts>
                <TopButton onClick={handleShopping} as={motion.div}  whileHover={{
        scale: 0.8,
        transition: { duration: 0.5 },
      }}>CHECKOUT-NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                   {cart.products?.map((product)=>{
                    return(
                        <>
                        <Product key={product._id}>
                            
                        <ProductDetail>
                            <Image src={product.img}/>
                            <Details>
                                <ProductName><b>Product:</b> {product.title}</ProductName>
                                <ProductId><b>ID:</b>{product._id}</ProductId>
                                <ProductColor color={product.color}/>
                                <ProductSize><b>SIZE:</b>{product.size}</ProductSize>
                            </Details>
                           
                            
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>{product.quantity}</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>RS {product.price*product.quantity}</ProductPrice>
                            
                        </PriceDetail>
                        
                    </Product>
                    <Hr/>
                    </>

                    )
                   }) }
                    
                  
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    
                    <Address placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
                    <Address placeholder="Phone no" onChange={(e)=>setPhone(e.target.value)} required/>
                    <Address placeholder="Enter Your complete address with pincode" required onChange={(e)=>setAddress(e.target.value)}/>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>RS {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>RS 50</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>RS -50</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText >Payment Method</SummaryItemText>
                        <SummaryItemText >Cash on delivery</SummaryItemText>
                        
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>RS {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                   
                    <Button onClick={handleConform} as={motion.div}  whileHover={{
        scale: 0.8,
        transition: { duration: 0.5 },
      }}>CONFIRM ORDER</Button>
                </Summary>


            </Bottom>
        </Wrapper>
        <Footer/>

      
    </Container>
  )
}

export default Cart
