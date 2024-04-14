
import styled from "styled-components"
import {popularProduct} from "../data"
import Product from "./Product"
import {useEffect, useState} from "react"
import axios from "axios"

const Container=styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;

`

const Products = ({cat, filters, sort}) => {
   
  const [products, setProducts]= useState([])
  const [filteredProducts, setFilteredProducts]= useState([])

  useEffect(()=>{
      const getProducts= async() =>{
        try{
          // const url = cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products";
          const url = "http://localhost:5000/api/products";
          const res = await axios.get(url);
          console.log(res)
          setProducts(res.data.products)
        }catch(err){
          console.error(err);
        }
      }
         getProducts()
         console.log(products)
  }, [])

  useEffect(() => {
    if (cat && filters) {
      setFilteredProducts(
        products.filter(item =>
          Object.entries(filters).every(([key, value]) =>
            item[key] && item[key].includes(value)
          )
        )
      );
      console.log(filteredProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [products, cat, filters]);

  // useEffect(()=>{
  //   if(sort==="newest"){
  //     setFilteredProducts(prev=>
  //     [...prev].sort((a,b)=> a.createdAt - b.createdAt))
  //   }else if(sort ==="asc"){
  //     setFilteredProducts((prev)=>
  //   [...prev].sort((a,b) => a.price -b.price))
  //   }else{
  //     setFilteredProducts((prev)=>
  //   [...prev].sort((a,b) => b.price -a.price))
  //   }
  // })
  

  return (
    <Container>
      {products.map((item)=>(
        <Product item={item} key={item.id}  />
      ))}

    </Container>
  )
}

export default Products


