import React from "react";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
// import Success from "./Pages/Success"
// import Pay from "./Pages/Pay"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import AdminRoute from "./Auth/AdminRoute";
// import Dashboard from "./admin/Dashboard";
import ForgetPassWord from "./Pages/ForgetPassword";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/forgotpassword" element={<ForgetPassWord />} /> {/* Corrected path */}
        {/* <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} /> */}

        {/* {admin} 
        <Route path="/admin" element={<AdminRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
