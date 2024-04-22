import item1 from "./image/item1.png";
import item2 from "./image/item2.jpg";
import item3 from "./image/item3.jpg";

// imports for Categories
import cat1 from "./image/cat1.jpg";
import chi from "./image/chi.jpg";
import por from "./image/por.jpg";

// imports for popularproducts
import paw from "./image/paw.jpg";
import CLiver from "./image/CLiver.jpg";
import drm from "./image/drm.jpg";
import whlc from "./image/whlc.jpg";
import sprib from "./image/sprib.jpg";
import gc from "./image/gc.jpg";
import { Filter } from "@mui/icons-material";


import porkchoila from "./videos/porkchoila.mp4"

export const sliderItems = [
  {
    id: 1,
    img: item1,
    title: "SUPER SALE",
    desc: "DONT COMPROMISE ON QUALITY!! GET 20% OFF FOR FROZEN PRODUCTS",
    bg: "f5fafd",
  },

  {
    id: 2,
    img: item2,
    title: "MEGA OFFER",
    desc: "DONT COMPROMISE ON QUALITY!! GET 30% OFF FOR FROZEN PRODUCTS",
    bg: "fcf1ed",
  },

  {
    id: 2,
    img: item3,
    title: "BEST SELLERS",
    desc: "DONT COMPROMISE ON QUALITY !! EVERY STOCK IS NOT ENOUGH",
    bg: "f5fafd",
  },
];

export const categories = [
  {
    id: 1,
    img: por,
    title: "PORK",
    cat:"pork"
  },

  {
    id: 2,
    img: por,
    title: "Recipe",
    cat:"recipe"
  },

  {
    id: 3,
    img: chi,
    title: "CHICKEN",
    cat: "chicken"

  },

  {
    id: 4,
    img: cat1,
    title: "FROZEN",
    cat:"froen products"
  },
];


 
    export const popularProduct = [
      {
        id: 1,
        img: paw,
        type: "fresh",
        available: "Combo Offers",  // Ensure this property matches one of the filter options
        countInStock: 10, 
        price: 250,
        createdAt: "2023-01-01"  // Example date format
      },
      {
        id: 2,
        img: CLiver,
        available: "new arrivals",
        type: "packed",
        countInStock: 5, 
        price: 500,
        createdAt: "2023-01-02"
      },
      {
        id: 3,
        img: drm,
        type: "fresh",
        countInStock: 8,
        price: 150,
        createdAt: "2023-01-03"
      },
      {
        id: 4,
        img: whlc,
        type: "packed",
        countInStock: 2,
        price: 300,
        createdAt: "2023-02-01"
      },
      {
        id: 5,
        img: sprib,
        type: "fresh",
        countInStock: 0,  // This product has no stock, ensure logic handles this case
        price: 350,
        createdAt: "2023-02-15"
      },
      {
        id: 6,
        img: gc,
        type: "fresh",
        countInStock: 15,
        price: 200,
        createdAt: "2023-02-20"
      },
    ];



    export const Recipe = {
      title: "Pork Choila",
      desc: "Belly pork choila"

    };
    
    