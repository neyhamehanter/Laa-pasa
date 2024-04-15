import React, { useState } from 'react'
import styled from 'styled-components'
import reg from '../image/reg.jpg'
import {mobile} from "../responsive"
import { signup } from '../Auth'


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
background-image: url(${reg});
background-size: contain; 
background-position: bottom right; 
background-repeat: no-repeat; 
z-index: -1; 
`;


const Wrapper=styled.div`
width:45%;
padding:20px;
background-color:white;
margin-top: -5vh;
border: 2px solid #ccc; 
box-sizing: border-box;

${mobile`
    width:75%;
  `}


`
const Form=styled.form`
font-size:24ox;
font-weight:300;
`
const Title=styled.h1`
display:flex;
flex-wrap:wrap;
margin-bottom: -5px
`
const Input=styled.input`
flex:1;
min-width:40%;
margin: 20px 10px 0px 0px;
padding:10px;
border: 1px solid #ccc; 
border-radius: 5px;

`
const Agreement=styled.span`
font-size:12px;
display: block;
margin: 20px 0px;

`
const Button=styled.button`
width:80px;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  return (
    <MainContainer>
      <BackgroundImage />
        <Wrapper>
            <Title>Create An Account</Title>
              <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/><br/>
                <Agreement> By creating an account,I consent to the processing of my personall data in accordance with the <b>PRIVACY POLICY</b></Agreement><br/>
              <Button>Create</Button>
              </Form>
        </Wrapper>
    </MainContainer>
  )
}

export default Register