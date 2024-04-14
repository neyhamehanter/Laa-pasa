import React,{useState,useEffect} from 'react'
import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import { Footer } from "../Components/Footer"
import bst from '../image/bst.jpg'
import { Add, Remove } from '@mui/icons-material'
import {mobile} from "../responsive"

const Container=styled.div`
`

const Wrapper=styled.div`
padding:50px;
display:flex;

${mobile`
    padding:10px;
    flex-direction:column;
  `}


`
const ImgContainer=styled.div`
flex:1;

`
const Image=styled.img`
width:100%;
height:40vh;
object-fit:cover;

${mobile`
    height:30vh;
  `}

`
const InfoContainer=styled.div`
flex:1;
padding:0px 50px;

${mobile`
    padding:10px;
  `}

`
const Title=styled.h1`
font-weight:200;
`
const Desc=styled.p`
margin:20px 0px;
`
const Price=styled.span`
font-weight:100;
font-size:40px;


`

const StockCount = styled.div`
  margin-top: 10px; 
  color: green; 
`;


const AddContainer=styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;

${mobile`
    width:100%;
  `}

`

const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight:700;
`

const Amount=styled.span`
  width:30px;
  height:30px;
  border-radius:10px;
  border:1px solid teal;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0px 5px;
`

const Button=styled.button`
padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;

 &:hover{
    background-color: #f8f4f4;

}

`



const Product = () => {
    const [product, setProduct] = useState({
        // Simulated stock count
        stockCount: 20, // Example value, replace with actual data fetched from your backend
      });
    
      useEffect(() => {
        // Placeholder for your backend call
        // Uncomment and replace this with your actual backend call to fetch product details
        /*
        getProductDetails('productId').then(data => {
          setProduct(data);
        });
        */
      }, []);
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
            <Image src={bst}/>
            </ImgContainer>
            <InfoContainer>
                <Title>Boneless Breast</Title>
                <Desc>Fresh Boneless Prodcuts cutten out frsh from farms to consumer 
                  pure grown in famrs eating organic foods.
                </Desc>
                <Price>Npr.350 per kg</Price>
                {product && <StockCount>In Stock: {product.stockCount} kg</StockCount>}
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Add To Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product