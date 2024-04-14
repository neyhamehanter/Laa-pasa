import {
  AddShoppingCartOutlined,
  FavoriteBorderOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import React from "react";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  z-index: 1;
  overflow: hidden;
`;

const Image = styled.img`
  height: 62%;
  width: 65%;
  z-index: 2;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #d0e0e3;
    transform: scale(1.1);
  }
`;

const StockStatus = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  background-color: #ff0000a8; // Semi-transparent red
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 12px;
  z-index: 2; // Ensure it's above other elements
`;

const Product = ({ item }) => {
  // Placeholder for stock check functionality
  const isOutOfStock = false; // Placeholder: Replace with actual check e.g., item.countInStock === 0

  // Function to handle adding to cart
  const handleAddToCartClick = () => {
    if (isOutOfStock) {
      alert("This item is out of stock.");
    } else {
      console.log("Add to cart", item.id);
    }
  };

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon onClick={handleAddToCartClick}>
          <AddShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      {isOutOfStock && <StockStatus>Out of Stock</StockStatus>}
    </Container>
  );
};

export default Product;
