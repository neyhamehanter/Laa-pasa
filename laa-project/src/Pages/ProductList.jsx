import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Newsletter from "../Components/Newsletter";
import { Footer } from "../Components/Footer";
import Products from "../Components/Products";
import {mobile} from "../responsive"
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
`;


const Title = styled.h1`
margin:20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
margin:20px;
${mobile`
    width: 0 20px; 
    display: flex;
    flex-direction: column;
`}
`;

const FilterText=styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;

${mobile`
    margin-right:0px;
  `}
`

const Select=styled.select`
padding:10px;
margin-right:20px;

${mobile`
    margin:10px 0px;
  `}
`

const Option=styled.option`
`

const ProductList = () => {
  const location=useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters,setFilters]=useState({ });
  const [sort,setSort]= useState("newest");

  const handleFilters =(e)=>{
  const value =e.target.value;
  setFilters({
    ...filters,
   [e.target.name] :value.trim(),
  });
  console.log(filters);
  }

  
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Filter_Products</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
        <Select  name="price" onChange={handleFilters}>
        <Option disabled >
                Available
            </Option>
            <Option>Combo Offers</Option>
            <Option>new arrivals</Option>
        </Select>

        <Select name =" types" onChange={handleFilters}>
            <Option disabled >
                Types
            </Option>
            <Option>bonesless</Option>
            <Option>packed</Option>
            <Option>fresh</Option>
        </Select>
        </Filter>
        <Filter><FilterText>Sort Products:</FilterText>
        
        <Select onChange={e=>setSort(e.target.value)}>
        <Option value ="newest">    newest       
            </Option>
            <Option value ="Low to High">Low to High</Option>
            <Option value="High to Low">High to Low</Option>
            
        </Select></Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default ProductList;
