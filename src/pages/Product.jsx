import { Add, Remove } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Annoucement from "../components/Annoucement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { publicRequest } from "../requestMethods"
import { mobile } from "../responsive"
import { useDispatch } from "react-redux"
import {addProduct} from "../redux/cartRedux"


const Container = styled.div`
      
`
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    ${mobile({flexDirection:"column",padding:"14px"})}
      
`
const ImgContainer = styled.div`
    flex: 1;
      
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: contain;
    ${mobile({height:"50vh"})}
      
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding:"0px 10px"})}
      
`
const Title = styled.h2`
      font-weight: 400;
      ${mobile({marginTop:"10px"})}
`
const Desc = styled.p`
    margin: 20px 0px;
    ${mobile({fontSize:"12px"})}
`
const Price = styled.span`
    font-weight: 400;
    font-size: 40px;
    opacity: 0.7;
    ${mobile({fontSize:"25px"})}
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
    ${mobile({width:"100%",margin:"20px 0px"})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 300;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
    ${mobile({margin:"0px 3px"})}
`
const FilterSize = styled.select`
    border-radius: 0px;
    margin-left: 5px;
    padding: 3px;
    outline: none;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({width:"100%"})}
    
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    padding: 5px;
`
const Amount = styled.span`
    width: 20px;
    height: 20px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
padding: 8px 8px;
display: flex;
align-items: center;
justify-content: center;
gap: 7px;
color: black;
background-color: transparent;
border: 1px solid black;
outline: none;
cursor: pointer;
font-weight: bold;
font-size: 13px;
`



const Product = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const[product,setProduct] = useState({})
    const[quantity,setQuantity] = useState(1)
    const[color,setColor] = useState("")
    const[size,setSize] = useState("")
    const dispatch = useDispatch();



    useEffect(()=>{
        const getProduct = async()=>{
            try{
                const res = await publicRequest.get("/products/find/" + id)
                setProduct(res.data)

            }catch(err){
                console.log(err)
            }
        }
        getProduct();

    },[id])

    const handleQuantity=(type)=>{
        if(type==="dec"){
            quantity>1 && setQuantity(quantity-1)
        }else{
            setQuantity(quantity+1)
        }
    }


    const handleClick = () => {
        dispatch(
          addProduct({...product, quantity, color,size })
        );
      };

   
    
  return (
    <Container>
        <Annoucement/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
            <Image src={product.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
                <Price>RS {product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color?.map((color)=>{
                            return(
                                <FilterColor key={color} color={color} onClick={()=>setColor(color)}/>
                            )

                        })}
                        
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            {product.size?.map((size)=>{
                                return(
                                    <FilterSizeOption key={size} >{size}</FilterSizeOption>

                                )
                            })}
                        
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=>handleQuantity("dec")}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=>handleQuantity("inc")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                 
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
      
    </Container>
  )
}

export default Product
