import  styled from "styled-components";
import {mobile} from "../responsive"
import { Link } from "react-router-dom";


const Container = styled.div`
flex:1;
margin:3px;
position:relative;
${mobile`
    height:70vh;
  `}


`;
const Image = styled.img`
width:100%;
height:50%;
object-fit:cover;
border:2px solid pink;

${mobile`
    height:30vh;
  `}


`;

const Info = styled.div`
position:absolute;
top:65px;
left:19px;
width:100%;
height:100%
display:flex;
justify-content: center; 
align-items: center; 
flex-direction: column;
`;
const Title = styled.h1`
 color: white;
 background-color: rgba(0, 0, 0, 0.5);

  width:fit-content;
margin-bottom:20px
`;
const Button = styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600;
`;


const CategoryItems = ({item}) => {
  return(
   <Container >
    <Link to={`/products/${item.cat}`}>
   <Image src={item.img} alt={item.title}/>
   <Info>
   <Title>{item.title}</Title>
   <Button>SHOP NOW</Button>
   </Info>
   </Link>
  </Container>

)
};

export default CategoryItems;
