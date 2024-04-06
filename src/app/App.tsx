import React from "react";
import "../css/App.css";
import { Container, Typography, Stack, Box, Button } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { HomePage } from "../screens/homePage";
import { ProductsPage } from "../screens/productsPage";
import { OrdersPage } from "../screens/ordersPage/index";
import UserPage from "../screens/userPage";
import { HeaderNavbar } from "./components/header/HeaderNavbar";
import OtherNavbar from "./components/header/OtherNavbar";
import { Footer } from "./components/footer";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/products.css";
import HelpPage from "../screens/helpPage";

function App() {
  const location = useLocation();
  return (  
    <>
      {location.pathname === "/" ? <HeaderNavbar/> : <OtherNavbar/>}
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage /> 
        </Route>
        <Route path="/member-page">
          <UserPage /> 
        </Route>
        <Route path="/help">
          <HelpPage /> 
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer/>
    </>
      
  )
}

export default App;
