import React, { useState } from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { signin, authenticate, isAuthenticated } from ".";
import LOG from "../image/LOG.jpg";
import { Link as RouterLink } from "react-router-dom";
import { mobile } from "../responsive";
import { useDispatch } from "react-redux";
import{login} from "../redux/apiCalls"
import { useSelector } from "react-redux";
import axios from 'axios';


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
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 60%;
  background-image: url(${LOG});
  background-size: contain;
  background-position: bottom right;
  background-repeat: no-repeat;
  z-index: -1;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  margin-top: 10px;
  border: 2px solid #ccc;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  ${mobile`
    width: 75%;
  `}
`;

const Form = styled.form`
  font-size: 14px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h1`
  margin-bottom: 20px;

`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 80%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  &:disabled {
    color: grey;
    cursor: not-allowed;
  }
`;

const StyledLink = styled(RouterLink)`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
 const [user,setUser] = useState({email: "", password:""})

 const onChangeInput = e =>{
  const{name, value} = e.target;
  setUser({...user, [name]:value})
 }

 const loginSubmit = async e=>{
  e.preventDefault()
  try{
    const response = await axios.post('http://localhost:8000/api/login', {...user})
    localStorage.setItem('firstLogin', true)
    window.location.href ="/"
    alert(response.data.msg)
  }catch(err){
    alert(err.response.data.msg)
  }
 }
 

  return (
    <MainContainer>
      <BackgroundImage />
      <Title>LOG IN</Title>
      <Wrapper>
        
        <Form onSubmit={loginSubmit}>
          <Input type="email"
           name="email"
            placeholder="email"
            value={user.email}
            onChange={onChangeInput}
           
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={onChangeInput}
           
          />
          <StyledLink to="/forgotpassword">Forgot password?</StyledLink>
          <StyledLink to="/register">Create a new account!</StyledLink>
          <Button type="submit">LOGIN</Button>
          
        </Form>
      </Wrapper>
    </MainContainer>
  );
};

export default Login;
