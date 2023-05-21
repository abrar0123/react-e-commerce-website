import React from "react";
import Header from "../../components/MainHeader/firstHeader/Header";
import HeaderSection from "../../components/MainHeader/sectionHeader/headerSection";
import Footer from "../../components/Layout/footer/footer";
import Prefooter from "../../components/Layout/prefooter/prefooter";
import Products from "../../components/Products/products";
import { Route, Routes } from "react-router-dom";
import catagories from "../catagories/catagories";
import Cart from "../../pages/Cart/cart";
import Postheader from "../../components/Layout/postheader/postheader";
import SeparateProduct from "../../components/Products/separateProduct";
import Delivery from "../delivery/delivery";
import Alreadyorder from "../delivery/alreadyorder";

export default function userAccount() {
  return (
    <React.Fragment>
      <Header />
      <Postheader />
      {/* <HeaderSection /> */}
      {/* <Products /> */}
      <Routes>
        <Route path="/" Component={HeaderSection} />
        <Route path="/Products" Component={Products} />
        <Route path="/Products/:pid" Component={SeparateProduct} />

        <Route path="/categories" Component={catagories} />
        <Route path="/Cart" Component={Cart} />
        <Route path="/delivery" Component={Delivery} />
        <Route path="/Alreadyorder" Component={Alreadyorder} />
      </Routes>

      {/* <HeaderSection /> */}
      <Prefooter />
      <Footer />
    </React.Fragment>
  );
}
