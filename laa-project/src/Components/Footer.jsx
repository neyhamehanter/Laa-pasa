import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import es from "../image/es.png";
import {mobile} from "../responsive"

const Container = styled.div`
  display: flex;
  ${mobile`
    flex-direction:column;
  `}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile`
    display:none;
  `}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile`
    background-color:#fff8f8;
  `}
  
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> LA_PASA.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Veritatismodi consequuntur explicabo perferendis 
          ab quasi laborum nisi fuga.Sapiente eligendi quasi 
          voluptatum, exercitationem est ratione perspiciatis 
          aspernatur vitae placeat quibusdam.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Pork</ListItem>
          <ListItem>Chicken</ListItem>
          <ListItem>Frozen-Products</ListItem>
          <ListItem>Recipe</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Thati Tole,Lagankhel || FalfulChowk, Kathmandu.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +977 9851858589 || +977 9841246556
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          Thati@gmail.com || Fal@gmail.com
        </ContactItem>
        <Payment src={es} />
      </Right>
    </Container>
  );
};
