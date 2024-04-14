import React from 'react';
import styled from 'styled-components';
import { Search, AddShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import {mobile} from "../responsive"
import { useSelector } from 'react-redux';

// Styled components
const Container = styled.div`
  max-width: 100%;
  height: 60px;
  margin: 0;
  ${mobile(`
  height:50px;
  padding: 20px;
`)}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items:flex-start;
  justify-content: space-between;
  ${mobile(`
  padding: 20px;
`)}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 5px;
  top:-5px;

  ${mobile(`
  margin-left: -10px; 
`)}
  
`;

const Input = styled.input`
  border: none;
  ${mobile(`
  width: 50px;
 
`)}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile(`
  margin-left: 10px; 
`)}
  
`;

const Logo = styled.h1`
  font-weight: bold;
  position: relative;
  top: -22px;
  ${mobile({fontSize:"20px"})}
  
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent:"center"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({flex:2,fontSize:"12px", marginLeft:"20px"})}
`;

// Navbar component
const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)

  
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LA-PASA.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>SignIn</MenuItem>
          <MenuItem>
            <Badge badgeContent={quantity} color="secondary">
              <AddShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
