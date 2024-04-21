import React, { useState } from 'react'
import styled from 'styled-components'
import reg from '../image/reg.jpg'
import {mobile} from "../responsive"
import { signup } from '../Auth'
import axios from 'axios'



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
  const [user, setUser] = useState({username:"",email:"",password:"",confirmPassword:""})

  const onChangeInput = e =>{
    const {name, value} = e.target;
    setUser({...user, [name]:value})
  }

  const registerSubmit = async e=>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:8000/api/register', {...user})
      localStorage.setItem('firstLogin', true)
      window.location.href="/"
      alert(response.data.msg)
    }catch(err){
  
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        alert(err.response.data.msg); // Accessing .msg from server response
   

    }
  }
  
  return (
    <MainContainer>
      <BackgroundImage />
        <Wrapper>
            
              <Form onSubmit={registerSubmit}>
                <Input type="text" placeholder="username" name="username" value={user.username} onChange={onChangeInput}/>
                <Input type="email" placeholder="email" name="email" value={user.email} onChange={onChangeInput}/>
                <Input type="password" placeholder="password" name='password' value={user.password} onChange={onChangeInput}/>
                <Input type="password" placeholder="confirm password" name='confirmPassword' value={user.confirmPassword} onChange={onChangeInput}/>
                <Agreement> By creating an account,I consent to the processing of my personall data in accordance with the <b>PRIVACY POLICY</b></Agreement><br/>
              <Button>Create</Button>
              </Form>
        </Wrapper>
    </MainContainer>
  )
}

export default Register