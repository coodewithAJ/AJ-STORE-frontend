
import { useEffect, useState } from "react"
import styled from "styled-components"
import Product from "./Product"
import axios from "axios"

const Container = styled.div`
    display: flex;
    padding: 15px;
    justify-content: space-between;
    flex-wrap: wrap;

`


const Products = ({cat,sort,filters}) => {
  const [products,setProducts] = useState([])
  const [filteredProducts,setFilteredProducts] = useState([])

  useEffect(()=>{
    const getProducts = async()=>{
      try{
        const res = await axios.get( cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products")

        setProducts(res.data)

       

      }catch(err){

      }
    }
    
    getProducts()
    


  },[cat])

  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(item=>Object.entries(filters).every(([key,value])=>item[key].includes(value)))
    )

  },[cat,filters,products])
  
  useEffect(()=>{
    if((sort === "newest")){
      setFilteredProducts((prev)=> [...prev].sort((a,b)=>a.createdAt - b.createdAt))
    }else if((sort === "asc")){
      setFilteredProducts((prev)=> [...prev].sort((a,b)=>a.price - b.price))
    }else{
      setFilteredProducts((prev)=> [...prev].sort((a,b)=>b.price - a.price))
    }

  },[sort])
  
 
  return (
    <Container>
        {cat ? filteredProducts.map((item)=>{
            return(
                <Product item={item} key={item._id}/>
            )
        }):products.slice(0,8).map((item)=>{
          return(
              <Product item={item} key={item._id}/>
          )
      })}
      
    </Container>
  )
}

export default Products
