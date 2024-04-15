import styled from "styled-components";
import LOG from "../image/LOG.jpg";
import { mobile } from "../responsive";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";

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
  left: 50%; // Adjusted for better centering
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
  font-size: 14px; // Changed from incorrect "24ox" to a valid value
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.user);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  // Functions to handle redirects and errors are no longer needed as the relevant Redux state handles them

  return (
    <MainContainer>
      <BackgroundImage />
      <Wrapper>
        <Title>LOG IN</Title>
        <Form onSubmit={handleClick}>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledLink to="/forgotpassword">Forgot password?</StyledLink>
          <StyledLink to="/register">Create a new account!</StyledLink>
          <Button type="submit" disabled={isFetching}>LOGIN</Button>
          {error && <Error>Something went wrong...</Error>}
        </Form>
      </Wrapper>
    </MainContainer>
  );
};

export default Login;
