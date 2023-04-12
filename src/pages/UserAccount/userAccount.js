import React from "react";
import Header from "../../components/MainHeader/firstHeader/Header";
import HeaderSection from "../../components/MainHeader/sectionHeader/headerSection";
import Footer from "../../components/Layout/footer/footer";
import Prefooter from "../../components/Layout/prefooter/prefooter";
import Products from "../../components/Products/products";
import { Route, Routes } from "react-router-dom";
import catagories from "../catagories/catagories";
import Cart from "../../pages/Cart/cart";
export default function userAccount() {
  return (
    // Card style={{ margin: "0px 20px" }}
    <React.Fragment>
      <Header />
      <Routes>
        {/* <HeaderSection /> */}
        <Route path="/" Component={HeaderSection} />
        <Route path="/Products" Component={Products} />
        <Route path="/categories" Component={catagories} />
        <Route path="/Cart" Component={Cart} />
      </Routes>

      {/* <HeaderSection /> */}
      <Prefooter />
      <Footer />
    </React.Fragment>
  );
}
