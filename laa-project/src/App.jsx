import React from "react"
import Home from "./Pages/Home"
import ProductList from "./Pages/ProductList"
import Product from "./Pages/Product"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Cart from "./Pages/Cart"
// import Success from "./Pages/Success"
// import Pay from "./Pages/Pay"
import { BrowserRouter,Routes,Route, Navigate} from "react-router-dom"

const App=()=>{
    const user= true
    return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <Home/> } ></Route>
        <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />}  ></Route>
        <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />}  ></Route>
        <Route path="/products/:category" element={ <ProductList/> } ></Route>
        <Route path="/product/:id" element={ <Product/> } ></Route>
        <Route path="/cart" element={ <Cart/> } ></Route>
        {/* <Route path="/pay" element={<Pay/>}></Route>
        <Route path="/success" element={<Success/>}></Route> */}
    </Routes>
    </BrowserRouter>
    )
}

export default App

