import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import { Footer } from '../Components/Footer';
import Navbar from '../Components/Navbar';
import bee from '../image/bee.jpg'
import { Add, Remove } from '@mui/icons-material';
import fr from '../image/Fr.jpg'
import {mobile} from "../responsive"



const Container=styled.div`
`

const Wrapper=styled.div`
padding:20px;

${mobile`
    padding:10px;
  `}

`

const Title=styled.h1`
font-weight:300;
text-align:center;

`

const Top=styled.div`
display:flex;
align-items::center;
justify-content:space-between;
padding:20px;
`

const TopButton=styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props=>(props.type === "filled" && "none")};
background-color:${props=>(props.type === "filled" ? "black" : "transparent")};
color:${props=>(props.type === "filled" && "white")};
`

const TopTexts=styled.div`
${mobile`
    display:none;
  `}


`
const TopText=styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;

`


const Bottom=styled.div`
display:flex;
justify-content:space-between;

${mobile`
    flex-direction:column;
  `}

`

const Info=styled.div`
flex:3;
`

const Product=styled.div`
display:flex;
justify-content:space-between;
background-color:#f0f0f0;
border: 1px solid #d3d3d3;
${mobile`
    flex-direction:column;
  `}
`


const ProductDetail=styled.div`
flex: 2;
display: flex; 


`

const Image=styled.img`
width:280px;
height:200px;
${mobile`
width: 50%; 
height: 30vh;
`}
`

const Details=styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
padding-left:20px;
`

const ProductName=styled.span``

const ProductId=styled.span``

const ProductInStock=styled.span``

const PriceDetail=styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const ProductAmountContainer=styled.div`
display:flex;
align-items:center;
margin-bottom:20px;

${mobile`
    margin:5px 15px;
  `}

`
const ProductAmount=styled.div`
font-size:24;
margin:5px;

`
const ProductPrice=styled.div`
font-size:30px;
wont-weight:200;

${mobile`
    margin-bottom: 20px;
  `}
`

const Hr=styled.hr`
background-color:#eee;
border:none;
height:3px;
`


const Summary=styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`
const SummaryTitle=styled.h1`
font-weight:200;

`

const SummaryItem=styled.div`
margin:27px 0px;
display:flex;
justify-content:space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText=styled.span`
`
const SummaryItemPrice=styled.span`
`
const Button=styled.button`
width:100%;
padding:10px;
background-color: black;
color:white;
font-weight:600;
`











const Cart = () => {
  return (
        <Container>
         <Announcement/>
         <Navbar/>
         <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTexts>
                   <TopText>Shopping Bag(2)</TopText> 
                   <TopText>Your Wishlist</TopText>
                </TopTexts>
                <TopButton type="filled">Checkout Now</TopButton>
            </Top>
            <Bottom>

                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src={bee}/>
                            <Details>
                                <ProductName><b>Product:</b>Frozen Sausage</ProductName>
                                <ProductId><b>ID:</b>323232</ProductId>
                                <ProductInStock><b>CountInStock: 2 left</b></ProductInStock>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                             <ProductAmountContainer>
                                <Remove/>
                                <ProductAmount>2</ProductAmount>
                                <Add/>
                             </ProductAmountContainer>
                             <ProductPrice>Nrs.350</ProductPrice>
                        </PriceDetail>

                        <Hr/>
                        </Product>
                        <Product>
                        <ProductDetail>
                            <Image src={fr}/>
                            <Details>
                                <ProductName><b>Product:</b>Frozen Bacon</ProductName>
                                <ProductId><b>ID:</b>44 22 82 82 </ProductId>
                                <ProductInStock><b>CountInStock: 2 left</b></ProductInStock>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                             <ProductAmountContainer>
                                <Remove/>
                                <ProductAmount>2</ProductAmount>
                                <Add/>
                             </ProductAmountContainer>
                             <ProductPrice>Nrs.300</ProductPrice>
                        </PriceDetail>
                        </Product>
                </Info>
                <Summary>
                    <SummaryTitle>
                        ORDER SUMMARY
                    </SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>Nrs.650</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>Nrs.100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>Nrs.-30</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>Nrs.650</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
         </Wrapper>
         <Footer/>
        </Container>
  )
}

export default Cart