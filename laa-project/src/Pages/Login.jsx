
import styled from 'styled-components'
import LOG from '../image/LOG.jpg'
import {mobile} from "../responsive"


const MainContainer = styled.div`
  width: 95vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  padding-top: 5vh;
  
`;

const BackgroundImage = styled.div`
position: absolute;
bottom: 0; 
left: 60%; 
transform: translateX(-50%); 
width: 80%; 
height: 60%; 
background-image: url(${LOG});
background-size: contain; 
background-position: bottom right; 
background-repeat: no-repeat; 
z-index: -1; 
`;


const Wrapper=styled.div`
width:25%;
padding:20px;
background-color:white;
margin-top: 10px;
border: 2px solid #ccc; 
box-sizing: border-box;
flex-direction: column; 
  align-items: center;


${mobile`
    width:75%;
  `}


`
const Form=styled.form`
font-size:24ox;
font-weight:300;
flex-direction:column:
display: flex;
flex-direction: column; 
width: 100%;
`
const Title=styled.h1`
display:flex;
flex-wrap:wrap;
margin-bottom: 20px;

`
const Input=styled.input`
flex:1;
min-width:40%;
margin: 10px 0 ;
padding:10px;
border: 1px solid #ccc; 
border-radius: 5px;
`

const Button=styled.button`
width:80%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-top: 20px;
`

const Link=styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
`

const Login = () => {
  return (
        <MainContainer>
      <BackgroundImage />
        <Wrapper>
            <Title>SIGN IN</Title>
              <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/><br/>
              <Link> DO NOT REMEMBER THE PASSWORD?</Link>
              <Link> CREATE A NEW ACCOUNT!!<br/></Link>
              <Button>LOGIN</Button>
              </Form>
        </Wrapper>
    </MainContainer>

  )
}

export default Login



