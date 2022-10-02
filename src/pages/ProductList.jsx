import { useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Annoucement from "../components/Annoucement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import { mobile } from "../responsive"

const Container = styled.div``
const Title = styled.h2`
    margin: 20px;
`
const FilterContainer  = styled.div`    
    display: flex;
    justify-content: space-between;
    
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({display:"flex",flexDirection:"column",gap:"7px"})}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`
const Select = styled.select`
    outline: none;
    border-radius: 0px;
    padding: 3px;
    cursor: pointer;
`
const Option = styled.option`
  
`

const ProductList = () => {
    const location = useLocation()
    const cat = location.pathname.split("/")[2]
    const [filters,setFilters] = useState({})
    const [sort,setSort] = useState("newest")

    const handleFilters = (e)=>{
        const value = e.target.value 
        setFilters({
            ...filters,
            [e.target.name]:value
        })
        
    }
  return (
    <Container>
        <Annoucement/>
        <Navbar/>
        <Title>{cat.toUpperCase()}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products: </FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled defaultValue>Color</Option>
                    <Option >white</Option>
                    <Option>black</Option>
                    <Option>red</Option>
                    <Option>blue</Option>
                    <Option>yellow</Option>
                    <Option>green</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Option disabled>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    
                </Select>



            </Filter>
            <Filter>
            <FilterText>Sort Products: </FilterText>
            <Select onChange={(e)=>setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (dec)</Option>
                   
                    
                </Select>


           
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
      
    </Container>
  )
}

export default ProductList
